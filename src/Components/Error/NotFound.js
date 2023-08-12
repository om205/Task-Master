import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white text-center">
        Oops, Page Not Found!
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-6 text-center">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline text-lg md:text-xl">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
