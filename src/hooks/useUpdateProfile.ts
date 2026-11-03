import { queryKeys } from "@/lib/queryKeys";
import { getErrorMessage } from "@/services/api";
import { updateMyProfile } from "@/services/memberApi";
import { UpdateMemberProfileRequest } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: UpdateMemberProfileRequest) => updateMyProfile(data),

    onSuccess: (updatedMember) => {
      queryClient.setQueryData(queryKeys.me, updatedMember);
    },
  });

  return {
    updateProfile: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error ? getErrorMessage(mutation.error) : null,
  };
}
