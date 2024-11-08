import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../assets";

const Navbar = () => {
  // State to handle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full z-30 sticky top-0 py-1 bg-gradient-to-r from-[#2a5ea9] to-purple-500 shadow-lg border-b border-yellow-400">
      <div className="w-full flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="hidden md:block">
          <Link to="/" className="flex items-center">
            <img src={HomeIcon} alt="Home" className="h-12 w-12" /> {/* Adjust size as needed */}
          </Link>
        </div>

        {/* Menu toggle button for mobile */}
        <button
          className="cursor-pointer md:hidden block"
          onClick={handleMenuToggle}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {/* Menu items for desktop */}
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-white pt-4 md:pt-0 space-x-6">
              <li>
                <Link
                  to="/"
                  className="inline-block text-lg font-semibold text-white hover:text-yellow-400 transition-colors"
                >
                  Post Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="inline-block text-lg font-semibold text-white hover:text-yellow-400 transition-colors"
                >
                  All Content History
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Authentication buttons */}
        { /* Authentication buttons grayed out untill the user is authentication functionality is implemented. After adding the functionality, just need to remove **"opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}** part from the buttons */ }
        <div className="order-2 md:order-3 flex items-center justify-end space-x-4">
          <div className="auth flex items-center space-x-4">
            <button className="bg-transparent text-white p-2 rounded border border-white hover:bg-white hover:text-yellow-900 duration-700 transform transition-all hover:-translate-y-1 opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}>
              Sign in
            </button>
            <button className="bg-yellow-300 text-yellow-900 p-2 rounded hover:bg-yellow-400 duration-700 transform transition-all hover:-translate-y-1 opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}>
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items (conditional rendering) */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden w-full bg-gradient-to-r from-blue-500 to-purple-600 border-t border-gray-300`}
      >
        <nav>
          <ul className="flex flex-col items-center text-white">
            <li>
              <Link
                to="/"
                className="inline-block text-lg font-semibold text-white hover:text-yellow-400 transition-colors py-3"
                onClick={() => setMenuOpen(false)} // Close menu on item click
              >
                Tech Post Generator
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="inline-block text-lg font-semibold text-white hover:text-yellow-400 transition-colors py-3"
                onClick={() => setMenuOpen(false)} // Close menu on item click
              >
                Content History
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
