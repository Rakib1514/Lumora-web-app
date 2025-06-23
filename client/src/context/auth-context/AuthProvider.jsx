import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authData = {
    user: "Rakib",
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
