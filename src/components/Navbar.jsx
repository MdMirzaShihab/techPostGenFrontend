import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full z-30 sticky top-0 py-1 bg-white shadow-lg border-b border-yellow-400">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        {/* Menu toggle button for mobile */}
        <button
          className="cursor-pointer md:hidden block"
          onClick={handleMenuToggle}
        >
          <svg
            className="fill-current text-blue-600"
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
            <ul className="md:flex items-center justify-between text-base text-[#5496db] pt-4 md:pt-0">
              <li>
                <Link
                  to="/"
                  className="inline-block no-underline hover:text-yellow-900 font-medium text-lg py-2 px-4 lg:-ml-2"
                >
                  Tech Post Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="inline-block no-underline hover:text-yellow-900 font-medium text-lg py-2 px-4 lg:-ml-2"
                >
                  All Content History
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Authentication buttons */}
        { /* Authentication buttons grayed out untill the user is authentication functionality is implemented. After adding the functionality, just need to remove **"opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}** part from the buttons */ }
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <button className="bg-transparent text-gray-800 p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700 opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}>
              Sign in
            </button>
            <button className="bg-[#5496db] text-gray-200 p-2 rounded hover:bg-blue-500 hover:text-gray-100 opacity-50 cursor-not-allowed" style={{ pointerEvents: "none" }}>
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items (conditional rendering) */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden w-full bg-white border-t border-gray-300`}
      >
        <nav>
          <ul className="flex flex-col items-center text-base text-blue-600">
            <li>
              <Link
                to="/"
                className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => setMenuOpen(false)} // Close menu on item click
              >
                Tech Post Generator
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4"
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
