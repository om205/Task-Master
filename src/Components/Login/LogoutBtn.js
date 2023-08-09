import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/authApi";
import { useUserContext } from "../../Context/UserContext";

export default function LogoutButton() {
  const { user, token, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logoutUser(user?._id, token);
    console.log(response);
    if (response?.success) {
      logout();
    }
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    user && (
      <button onClick={handleLogout} className="text-white hover:text-gray-200">
        Logout
      </button>
    )
  );
}
