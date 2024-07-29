import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link
            to="/about"
            className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/bloggers"
            className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
          >
            Bloggers
          </Link>
          <Link
            to="/bloggs"
            className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
          >
            Bloggs
          </Link>
          <Link
            to="/contact-us"
            className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
          >
            Contact Us
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/create"
                className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
              >
                Create Post
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline hover:underline-offset-4 hover:text-gray-200 transition-colors duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
