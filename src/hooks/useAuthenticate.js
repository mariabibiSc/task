import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";
const useAuthenticate = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.token ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};
export default useAuthenticate;
