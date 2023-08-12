import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext";
import { getTask, updateTask } from "../../../api/task";

function EditTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { token, logout } = useUserContext();

  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    const fetchTaskDetails = async () => {
      const response = await getTask(taskId, token);
      if (response.status === 401) {
        logout();
        navigate("/");
      }
      if (response?.success) {
        setTaskDetails(response.data);
      }
    };
    fetchTaskDetails();
  }, [taskId, token]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateTask(taskId, taskDetails, token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) {
      navigate(`/task/${taskId}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Title:
            <input
              type="text"
              name="title"
              value={taskDetails.title}
              onChange={handleInputChange}
              className="w-full border rounded-md py-1 px-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            />
          </label>
          <label className="block mb-4">
            Description:
            <textarea
              name="description"
              value={taskDetails.description}
              onChange={handleInputChange}
              className="w-full border rounded-md py-1 px-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            />
          </label>
          <label className="block mb-4">
            Completed:
            <input
              type="checkbox"
              name="completed"
              checked={taskDetails.completed}
              onChange={handleCheckboxChange}
              className="ml-2"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
