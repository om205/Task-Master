import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../api/task";
import { useUserContext } from "../../../Context/UserContext";

function CreateTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { token, logout } = useUserContext();

  const handleCreateTask = async () => {
    const newTask = {
      title,
      description,
    };

    const response = await createTask(newTask, token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex-grow max-w-lg mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
          />
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default CreateTask;
