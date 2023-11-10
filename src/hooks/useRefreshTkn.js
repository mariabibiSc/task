import useAuthenticate from "./useAuthenticate";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const useRefreshTkn = () => {
  const { setAuth } = useAuthenticate();
  const refresh = async () => {
    const response = await axios.get(`${baseUrl}/refresh`, {
      withCredentials: true, //
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshTkn;
