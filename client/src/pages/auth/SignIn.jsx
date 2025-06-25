import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth-context/AuthContext";
import { Link } from "react-router";

const SignIn = () => {
  const { userSignIn } = useContext(AuthContext);

  const [authError, setAuthError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignIn = async ({ email, password }) => {
    try {
      setAuthError("");
      setSuccessMsg("");
      const result = await userSignIn(email, password);
      console.log("User signed in:", result);
      setSuccessMsg("Signed in successfully!");
      reset();
    } catch (error) {
      console.error("Sign-in failed:", error);
      setAuthError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="md:w-5/12 w-11/12 mx-auto shadow-lg bg-white flex justify-center items-center rounded-xs">
        <div className="w-full m-16">
          <h4 className="text-2xl uppercase font-semibold text-center pb-6">
            Already have an Account
          </h4>

          {/* Success or Error Messages */}
          {successMsg && (
            <p className="text-green-600 text-center mb-4">{successMsg}</p>
          )}
          {authError && (
            <p className="text-red-600 text-center mb-4">{authError}</p>
          )}

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
            <div className="flex flex-col-reverse gap-2">
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                  errors.email ? "outline-red-500" : "outline-gray-300"
                }`}
              />
              <label
                htmlFor="email"
                className="text-gray-700 peer-focus:text-primary transition-colors"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col-reverse gap-2">
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                  errors.password ? "outline-red-500" : "outline-gray-300"
                }`}
              />
              <label
                htmlFor="password"
                className="text-gray-700 peer-focus:text-primary transition-colors"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mt-12">
              <Link to={'/auth/sign-up'}>
                <button
                  type="button"
                  className=" px-4 py-2 hover:bg-primary/20 rounded-xs hover:cursor-pointer"
                >
                  Create Account
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xs hover:cursor-pointer"
              >
                <span className="text-white">Sign In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
