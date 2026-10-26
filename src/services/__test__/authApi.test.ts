import { apiRequest } from "../api";
import { logout } from "../authApi";
import { getTokens } from "../tokenStorage";

jest.mock("../api", () => ({ apiRequest: jest.fn() }));
jest.mock("../tokenStorage", () => ({ getTokens: jest.fn() }));

const mockApiRequest = apiRequest as jest.Mock;
const mockGetTokens = getTokens as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
});

describe("logout", () => {
  it("sends the refresh token to the logout route, without an access token", async () => {
    mockGetTokens.mockResolvedValue({
      accessToken: "a1",
      refreshToken: "r1",
    } as never);
    mockApiRequest.mockResolvedValue(undefined as never);

    await logout();

    expect(mockApiRequest).toHaveBeenCalledWith("/member-auth/logout", {
      method: "POST",
      auth: false,
      body: JSON.stringify({ refreshToken: "r1" }),
    });
  });

  it("does nothing when there are no stored tokens", async () => {
    mockGetTokens.mockResolvedValue(null as never);

    await logout();

    expect(mockApiRequest).not.toHaveBeenCalled();
  });

  it("never throws, so the local sign out can always continue", async () => {
    mockGetTokens.mockResolvedValue({
      accessToken: "a1",
      refreshToken: "r1",
    } as never);
    mockApiRequest.mockRejectedValue(new Error("offline") as never);

    await expect(logout()).resolves.toBeUndefined();
  });
});
