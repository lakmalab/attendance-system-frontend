import { useState } from "react";
import AlertMessage from "../components/AlertMessage";
import { useAuth } from "../provider/authProvider";
import authService from "../service/authService";



export default function LoginPage() {
  const { setToken } = useAuth();
  const [alert, setAlert] = useState("");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(credentials);
      if (data?.token) {
        setToken(data.token);
        console.log("Logged in with token:", data.token);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setAlert("Login failed. Please check your credentials and try again.");
    }
  };

  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const LockIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  const BuildingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 "
      >
        {alert && (
          <AlertMessage
            message={alert}
            color="green"
            onClose={() => setAlert("")}
          />
        )}

        <div className="min-h-screen  from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
            {/* Left side - Welcome message */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 p-10 text-white flex flex-col justify-center">
              <img
                className="h-auto max-w-full"
                src="./assets/office-worker.jpg"
                alt="image"
              ></img>

              <div className="mb-6">
                <BuildingIcon />
                <h1 className="text-3xl font-bold mb-4">
                  Welcome to CompanyAttend
                </h1>
                {/*   <p className="text-blue-100">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>*/}
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p>Mark Attendance</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p>Request Leave</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p>Track your schedule</p>
                </div>
              </div>
            </div>

            {/* Right side - Login form */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  USER LOGIN
                </h2>
                <p className="text-gray-600">
                  Enter your credentials to access the system
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your Email"
                      value={credentials.username}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={credentials.rememberMe}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  LOGIN
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>© 2025 Lakmal Abeyrathne. All rights reserved.</p>
                <p className="mt-2">
                  Designed for efficient workforce management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
