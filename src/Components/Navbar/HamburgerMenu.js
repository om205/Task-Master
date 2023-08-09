// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../Context/UserContext";
// import LogoutButton from "../Login/LogoutBtn";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useUserContext();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="md:hidden">
//       <button
//         className="text-black hover:text-white focus:outline-none bg-transparent"
//         onClick={toggleMenu}
//       >
//         <div className="w-6 h-1 bg-blue-700 mb-1"></div>
//         <div className="w-6 h-1 bg-blue-700 mb-1"></div>
//         <div className="w-6 h-1 bg-blue-700"></div>
//       </button>
//       {isOpen && (
//         <div className="mt-2">
//           <Link
//             to="/"
//             className="block text-white font-semibold py-2 px-4 hover:bg-blue-700 transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/account"
//             className="block text-white font-semibold py-2 px-4 hover:bg-blue-700 transition duration-300"
//           >
//             Account
//           </Link>
//           <Link
//             to="/contact"
//             className="block text-white font-semibold py-2 px-4 hover:bg-blue-700 transition duration-300"
//           >
//             Contact
//           </Link>{" "}
//           {!user && (
//             <Link
//               to="/login"
//               className="block text-white font-semibold py-2 px-4 hover:bg-blue-700 transition duration-300"
//             >
//               Login
//             </Link>
//           )}{" "}
//           {!user && (
//             <Link
//               to="/signup"
//               className="block text-white font-semibold py-2 px-4 hover:bg-blue-700 transition duration-300"
//             >
//               Signup
//             </Link>
//           )}
//           {user && <LogoutButton />}
//           <div className="relative">
//             <input
//               type="text"
//               className="bg-white text-gray-800 rounded-full px-4 py-2 w-32 focus:outline-none focus:shadow-outline"
//               placeholder="Search"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import LogoutButton from "../Login/LogoutBtn";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { user } = useUserContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative md:absolute">
      <div className="md:hidden">
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label
          htmlFor="menu-toggle"
          className="fixed top-4 right-4 z-50 cursor-pointer"
        >
          <div
            style={{
              width: "30px",
              height: "4px",
              backgroundColor: "#333",
              margin: "6px 0",
              transition: "background-color 0.3s, transform 0.3s",
            }}
          ></div>
        </label>
      </div>

      <div
        ref={menuRef}
        id="content"
        className={`fixed top-0 left-0 h-auto w-48 bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-48"
        }`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-48rem)",
        }}
      >
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              to="/account"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200"
            >
              Account
            </Link>
            <Link
              to="/contact"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200"
            >
              Contact
            </Link>
            {!user && (
              <>
                <Link
                  to="/login"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200"
                >
                  Signup
                </Link>
              </>
            )}
            {user && <LogoutButton />}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <input
                type="text"
                className="bg-gray-700 text-white rounded-full px-4 py-2 w-full focus:outline-none focus:shadow-outline"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all ${isOpen ? "opacity-50" : ""}`}
        style={{ marginLeft: "12rem" }}
      >
        {/* Rest of your page content */}
      </div>
    </div>
  );
}

export default HamburgerMenu;
