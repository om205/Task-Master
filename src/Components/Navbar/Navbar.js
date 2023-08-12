import { Link } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import LogoutButton from "../Login/LogoutBtn";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="flex items-center justify-between mx-auto">
          <Link to="/" className="text-white text-xl font-bold">
            Task-Master
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/account" className="text-white hover:text-gray-200">
              Account
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>{" "}
            {!user && (
              <Link to="/login" className="text-white hover:text-gray-200">
                Login
              </Link>
            )}{" "}
            {!user && (
              <Link to="/signup" className="text-white hover:text-gray-200">
                Signup
              </Link>
            )}
            {user && <LogoutButton classes="text-white hover:text-gray-200" />}
            <div className="relative">
              <input
                type="text"
                className="bg-white text-gray-800 rounded-full px-4 py-2 w-64 focus:outline-none focus:shadow-outline"
                placeholder="Search"
              />
            </div>
          </div>
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
}
