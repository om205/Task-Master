import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/authApi";
import { useUserContext } from "../../Context/UserContext";

export default function LogoutButton(props) {
  const { user, token, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logoutUser(user?._id, token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) {
      logout();
    }
    navigate("/");
    props.closeMenu && props.closeMenu();
  };

  return (
    user && (
      <button onClick={handleLogout} className={props?.classes}>
        Logout
      </button>
    )
  );
}
