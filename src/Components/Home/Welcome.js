import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900 min-h-[85vh] flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Welcome to TaskMaster!
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          Your Ultimate Task Management Solution
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
        <p className="text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 underline">
            Login here
          </Link>
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 text-white text-center bg-blue-900">
        © 2023 TaskMaster. All rights reserved.
      </div>
    </div>
  );
};

export default Welcome;
