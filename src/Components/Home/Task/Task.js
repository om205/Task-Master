import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import EditDeleteButtons from "./EditDeleteButtons";
import { useUserContext } from "../../../Context/UserContext";
import { getTask, updateTask } from "../../../api/task";

function Task() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, logout } = useUserContext();
  const [taskDetails, setTaskDetails] = useState({
    _id: id,
    title: "Sample Task",
    description: "This is a sample task description.",
    completed: false,
    createdAt: "2023-07-26T10:00:00Z",
    photoUrl: "https://via.placeholder.com/150", // Replace with actual photo URL
    // ...other task details
  });

  useEffect(() => {
    const fetchTask = async () => {
      const response = await getTask(id, token);
      if (response.status === 401) {
        logout();
        navigate("/");
      }
      if (response?.success) {
        setTaskDetails(response.data);
        setIsCompleted(response.data.completed);
      }
    };
    fetchTask();
  }, [id, token]);

  const [isCompleted, setIsCompleted] = useState(taskDetails.completed);

  const handleCompleteToggle = async () => {
    const response = await updateTask(id, { completed: !isCompleted }, token);
    if (response?.success) setIsCompleted(!isCompleted);
    else alert("Something went wrong. Please try again.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-2">{taskDetails.title}</h2>
        <p className="text-gray-600 mb-4">{taskDetails.description}</p>
        {taskDetails.photoUrl && (
          <img
            src={taskDetails.photoUrl}
            alt="Task"
            className="mb-4 rounded-lg w-full"
          />
        )}
        <p className="text-gray-400 italic mb-2">
          Created at: {new Date(taskDetails.createdAt).toLocaleString()}
        </p>
        <p className="text-gray-400 italic mb-2">
          Last updated at: {new Date(taskDetails.updatedAt).toLocaleString()}
        </p>
        <div className="flex items-center mb-4">
          <label htmlFor="completed" className="mr-2">
            Mark as Complete:
          </label>
          <input
            type="checkbox"
            id="completed"
            checked={isCompleted}
            onChange={handleCompleteToggle}
          />
        </div>
        <EditDeleteButtons taskId={taskDetails._id} />
        <Link
          to="/"
          className="mt-4 text-white bg-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 block w-full text-center"
        >
          Back to Tasks
        </Link>
      </div>
    </div>
  );
}

export default Task;
