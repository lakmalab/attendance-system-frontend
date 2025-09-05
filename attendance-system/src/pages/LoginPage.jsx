import React, { useState } from "react";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
        {/* Heading */}
        <h2 className="text-center font-bold text-3xl text-gray-900 dark:text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center">
          <div className="relative flex w-72 h-12 border border-gray-200 dark:border-gray-600 rounded-full overflow-hidden">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 z-10 font-medium transition-all ${
                isLogin ? "text-white" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 z-10 font-medium transition-all ${
                !isLogin ? "text-white" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Sign Up
            </button>
            <div
              className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 transition-all duration-300 ${
                isLogin ? "left-0" : "left-1/2"
              }`}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          )}

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {/* Switch Text */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {isLogin ? "Sign Up Now" : "Login Now"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
