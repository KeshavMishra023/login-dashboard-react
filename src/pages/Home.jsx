import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation Bar */}
      {/* <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Appzest</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-200">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-gray-200">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      {/* Main Section (Hero Section) */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Appzest
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The ultimate platform for managing your tasks and projects. Get
            started today!
          </p>
          <div>
            <Link
              to="/Login"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mr-4"
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Register Now
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
          <div className="text-sm">
            &copy; 2025 Appzest. All Rights Reserved.
          </div>
          <div className="mt-4">
            <a href="#" className="text-white hover:text-gray-400 mx-2">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
