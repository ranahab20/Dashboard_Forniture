export const getMe = async (
  token
) => {
  const response =
    await axios.get(
      "https://test-backend.abdulrahman-hares.com/api/auth/me",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};
