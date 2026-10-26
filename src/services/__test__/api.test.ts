import { apiRequest, setSessionExpiredHandler } from "../api";
import { clearTokens, getTokens, saveTokens } from "../tokenStorage";

jest.mock("../tokenStorage", () => ({
  getTokens: jest.fn(),
  saveTokens: jest.fn(),
  clearTokens: jest.fn(),
}));

const mockGetTokens = getTokens as jest.Mock;
const mockSaveTokens = saveTokens as jest.Mock;
const mockClearTokens = clearTokens as jest.Mock;

const fetchMock = jest.fn<Promise<unknown>, any[]>();
globalThis.fetch = fetchMock as unknown as typeof fetch;

const OLD_TOKENS = { accessToken: "old-access", refreshToken: "old-refresh" };
const NEW_TOKENS = { accessToken: "new-access", refreshToken: "new-refresh" };

/** Minimal stand-in for a fetch Response. */
function reply(status: number, body?: unknown) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  };
}

const authHeader = (callIndex: number): string | undefined =>
  fetchMock.mock.calls[callIndex][1].headers.Authorization;

const refreshCalls = () =>
  fetchMock.mock.calls.filter(([url]) =>
    String(url).endsWith("/member-auth/refresh"),
  );

beforeEach(() => {
  jest.resetAllMocks();
  mockGetTokens.mockResolvedValue(OLD_TOKENS as never);
  setSessionExpiredHandler(null);
});

describe("apiRequest", () => {
  it("sends the access token as a Bearer header", async () => {
    fetchMock.mockResolvedValueOnce(reply(200, { ok: true }));

    await apiRequest("/member-auth/me");

    expect(authHeader(0)).toBe("Bearer old-access");
  });

  it("refreshes once on a 401 and retries with the new token", async () => {
    fetchMock
      .mockResolvedValueOnce(reply(401))
      .mockResolvedValueOnce(reply(200, NEW_TOKENS))
      .mockResolvedValueOnce(reply(200, { name: "Tosho" }));

    const result = await apiRequest("/member-auth/me");

    expect(result).toEqual({ name: "Tosho" });
    expect(mockSaveTokens).toHaveBeenCalledWith(NEW_TOKENS);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(String(fetchMock.mock.calls[1][0])).toContain(
      "/member-auth/refresh",
    );
    expect(authHeader(2)).toBe("Bearer new-access");
  });

  it("shares ONE refresh call between parallel 401s", async () => {
    fetchMock.mockImplementation(async (url: string, init: RequestInit) => {
      if (String(url).endsWith("/member-auth/refresh")) {
        return reply(200, NEW_TOKENS);
      }
      const header = (init.headers as Record<string, string>).Authorization;
      return header === "Bearer new-access"
        ? reply(200, { ok: true })
        : reply(401);
    });

    await Promise.all([apiRequest("/member-auth/me"), apiRequest("/other")]);

    expect(refreshCalls()).toHaveLength(1);
  });

  it("does not sign the user out on a network error", async () => {
    const expired = jest.fn();
    setSessionExpiredHandler(expired);
    fetchMock.mockRejectedValueOnce(new TypeError("Network request failed"));

    await expect(apiRequest("/member-auth/me")).rejects.toMatchObject({
      status: 0,
    });

    expect(expired).not.toHaveBeenCalled();
    expect(mockClearTokens).not.toHaveBeenCalled();
  });

  it("signs the user out when the refresh token is dead", async () => {
    const expired = jest.fn();
    setSessionExpiredHandler(expired);
    fetchMock
      .mockResolvedValueOnce(reply(401))
      .mockResolvedValueOnce(reply(401));

    await expect(apiRequest("/member-auth/me")).rejects.toMatchObject({
      status: 401,
    });

    expect(mockClearTokens).toHaveBeenCalled();
    expect(expired).toHaveBeenCalledTimes(1);
  });

  it("keeps the session when the refresh endpoint fails with a server error", async () => {
    const expired = jest.fn();
    setSessionExpiredHandler(expired);
    fetchMock
      .mockResolvedValueOnce(reply(401))
      .mockResolvedValueOnce(reply(500, { error: { message: "Boom" } }));

    await expect(apiRequest("/member-auth/me")).rejects.toMatchObject({
      status: 500,
    });

    expect(mockClearTokens).not.toHaveBeenCalled();
    expect(expired).not.toHaveBeenCalled();
  });

  it("shows the message from a LoopBack error body", async () => {
    fetchMock.mockResolvedValueOnce(
      reply(400, { error: { statusCode: 400, message: "Email is required" } }),
    );

    await expect(apiRequest("/something")).rejects.toThrow("Email is required");
  });

  it("returns undefined on 204 No Content", async () => {
    fetchMock.mockResolvedValueOnce(reply(204));

    await expect(
      apiRequest("/member-auth/request-code", { method: "POST", auth: false }),
    ).resolves.toBeUndefined();
  });

  it("does not attach a token or try to refresh when auth is false", async () => {
    fetchMock.mockResolvedValueOnce(
      reply(401, {
        error: { message: "Invalid or expired verification code." },
      }),
    );

    await expect(
      apiRequest("/member-auth/verify-code", { method: "POST", auth: false }),
    ).rejects.toMatchObject({
      status: 401,
      message: "Invalid or expired verification code.",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(authHeader(0)).toBeUndefined();
    expect(mockGetTokens).not.toHaveBeenCalled();
  });
});
