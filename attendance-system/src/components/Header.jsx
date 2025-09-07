import { useState } from "react";
import { FaMoon, FaSignal, FaHeart, FaBox, FaFire } from "react-icons/fa";
import Logo from "../assets/logo.png";
import authService from "../service/authService";
import { useAuth } from "../provider/authProvider";
export default function Header() {
      const { setToken } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
 const handleLogout = async () => {
    try {
     authService.logout();
      setToken("");
       console.log("Logged out");
    } catch (error) {
      console.error("LogOut failed:", error);
      //setAlert("LogOut failed. Please try again.");
    }
  };
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
                src={Logo}
                alt="profile"
                className="w-full h-full object-cover"
              />
          </div>
          <span className="font-semibold text-lg">A A I B</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Schedule", "Leave","Help"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`hover:text-blue-400 ${
                  item === "Home" ? "text-blue-500 font-medium" : ""
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4 relative">
          <button className="hover:text-blue-400">
            <FaMoon />
          </button>
          <button className="hover:text-blue-400">
            <FaSignal />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full border-2 border-gray-600 overflow-hidden"
            >
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-xl shadow-lg overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-semibold">Neil sims</p>
                  <p className="text-xs text-gray-400">name@flowbite.com</p>
                </div>
                <ul className="py-2 text-sm">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Account settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-700 space-x-2"
                    >
                      <FaHeart /> <span>My likes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-700 space-x-2"
                    >
                      <FaBox /> <span>Collections</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-700 space-x-2 text-blue-400"
                    >
                      <FaFire /> <span>Pro version</span>
                    </a>
                  </li>
                </ul>
                <div className="border-t border-gray-700">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                    onClick={handleLogout}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>

         
        </div>
      </div>
    </header>
  );
}
