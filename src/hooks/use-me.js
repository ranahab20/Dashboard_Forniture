export function useMe(
  token
) {
  return useQuery({
    queryKey: [
      "me",
    ],

    queryFn: () =>
      getMe(token),

    enabled:
      !!token,

    retry:
      false,
  });
}
