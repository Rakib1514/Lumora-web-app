import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { userSignOut } = useAuth();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          await userSignOut();
          navigate("/auth/sign-in");
        }
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor on unmount
    return () => axiosSecure.interceptors.response.eject(interceptor);
  }, [navigate, userSignOut]);

  return axiosSecure;
};

export default useAxiosSecure;
