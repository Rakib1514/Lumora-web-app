import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth-context/AuthContext";
import { Link } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const { userSignUp } = useContext(AuthContext);
  const [authError, setAuthError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignUp = async ({ name, email, password }) => {
    try {
      setAuthError("");
      setSuccessMsg("");
      const result = await userSignUp(email, password, name);
      console.log("User signed up:", result);
      setSuccessMsg("Account created successfully!");
      reset();
    } catch (error) {
      console.error("Sign-up failed:", error);
      setAuthError(error?.message || "Could not create account.");
    }
  };

  const passwordValue = watch("password", "");

  return (
    <div className="min-h-screen flex justify-center items-center mt-12">
      <div className="md:w-5/12 w-11/12 mx-auto shadow-lg bg-white rounded-xs">
        <div className="p-16">
          <h4 className="text-2xl uppercase font-semibold text-center pb-6">
            Create Your Account
          </h4>

          {successMsg && (
            <p className="text-green-600 text-center mb-4">{successMsg}</p>
          )}
          {authError && (
            <p className="text-red-600 text-center mb-4">{authError}</p>
          )}

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col-reverse gap-2">
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`peer outline-1 px-2 py-3 w-full focus:outline-primary ${
                  errors.name ? "outline-red-500" : "outline-gray-300"
                }`}
              />
              <label
                htmlFor="name"
                className="text-gray-700 peer-focus:text-primary transition-colors"
              >
                Full Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="flex flex-col-reverse gap-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Min 6 characters",
                  },
                })}
                className={`peer outline-1 px-2 py-3 pr-10 w-full focus:outline-primary ${
                  errors.password ? "outline-red-500" : "outline-gray-300"
                }`}
              />
              <label
                htmlFor="password"
                className="text-gray-700 peer-focus:text-primary transition-colors"
              >
                Password
              </label>
              <span
                className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col-reverse gap-2 relative">
              <input
                type={showConfirm ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) =>
                    val === passwordValue || "Passwords do not match",
                })}
                className={`peer outline-1 px-2 py-3 pr-10 w-full focus:outline-primary ${
                  errors.confirmPassword ? "outline-red-500" : "outline-gray-300"
                }`}
              />
              <label
                htmlFor="confirmPassword"
                className="text-gray-700 peer-focus:text-primary transition-colors"
              >
                Confirm Password
              </label>
              <span
                className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-12">
              <Link to={"/auth/sign-in"}>
                <button
                  type="button"
                  className="px-4 py-2 hover:bg-primary/20 rounded-xs"
                >
                  Already have an account
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xs"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
