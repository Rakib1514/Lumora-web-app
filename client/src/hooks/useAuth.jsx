import { useContext } from "react";
import AuthContext from "../context/auth-context/AuthContext";

const useAuth = () => {
  const authFunc = useContext(AuthContext);

  return authFunc;
};

export default useAuth;
