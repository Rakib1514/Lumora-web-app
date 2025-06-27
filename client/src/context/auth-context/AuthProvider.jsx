import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const getCurrentUser = async () => {
        try {
          const { data } = await axios.get(`/users/${currentUser.uid}`);
          if (!data.success) {
            throw new Error("Server Error", data);
          }

          const res = await axios.post(
            "/auth/jwt-signin",
            { _id: data.user._id },
            { withCredentials: true }
          );
          console.log(res.data);
          setUser(data.user);
        } catch (error) {
          console.log(error);
        }
      };

      getCurrentUser();

      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    isLoading,
    userSignIn,
    userSignUp,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
