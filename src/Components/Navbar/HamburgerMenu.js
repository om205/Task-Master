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

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.id !== "toggleBtn" &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
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
        <button
          id="toggleBtn"
          className="text-white absolute top-[-1rem] right-4 cursor-pointer font-extrabold text-xl z-50"
          onClick={(e) => {
            toggleMenu(e);
          }}
        >
          ☰
        </button>
      </div>

      <div
        ref={menuRef}
        id="content"
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-blue-800 transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {isOpen && (
          <div className="z-50 md:hidden flex flex-col h-full text-white">
            <div className="py-8 px-6 space-y-4">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/account"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                onClick={toggleMenu}
              >
                Account
              </Link>
              <Link
                to="/contact"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              {!user && (
                <>
                  <Link
                    to="/login"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                    onClick={toggleMenu}
                  >
                    Signup
                  </Link>
                </>
              )}
              {user && (
                <LogoutButton
                  closeMenu={() => {
                    toggleMenu();
                  }}
                  classes="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 transition"
                />
              )}
            </div>
            <div className="flex-grow flex items-start py-4 px-6 border-t border-blue-600">
              <input
                type="text"
                className="bg-blue-600/50 text-white rounded-full px-4 py-2 w-full focus:outline-1 focus:shadow-outline"
                placeholder="Search"
              />
            </div>
          </div>
        )}
      </div>

      <div
        className={`transition-all ${isOpen ? "opacity-50" : ""}`}
        style={{ marginLeft: "12rem" }}
      ></div>
    </div>
  );
}

export default HamburgerMenu;
