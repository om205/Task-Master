import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext";
import { deleteTask } from "../../../api/task";

function EditDeleteButtons({ taskId }) {
  const navigate = useNavigate();
  const { token, logout } = useUserContext();
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    const response = await deleteTask(taskId, token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="flex items-center">
      <Link
        to={`/edit-task/${taskId}`}
        className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300 mr-2"
      >
        Edit
      </Link>
      <button
        className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition duration-300"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default EditDeleteButtons;
