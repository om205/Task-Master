import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  const { _id, title, description, createdAt, completed } = task;

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer">
      <Link to={`/task/${_id}`} className="block">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-slate-400 text-sm">
            {new Date(createdAt).toLocaleString()}
          </p>

          <span
            className={`${
              completed ? "text-green-500" : "text-red-500"
            } text-sm font-semibold`}
          >
            {completed ? "Completed" : "Pending"}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default TaskItem;
