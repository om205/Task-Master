import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext";
import TaskItem from "./TaskItem";
import { getTasks } from "../../../api/task";

function TaskList() {
  const navigate = useNavigate();
  const { user, token, logout } = useUserContext();
  const [tasks, setTasks] = useState([]);
  const [completedFilter, setCompletedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt:desc");
  const [tasksPerPage, setTasksPerPage] = useState(5);
  const [totalTasks, setTotalTasks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTasks();
  }, [completedFilter, sortBy, tasksPerPage, currentPage, user._id, token]);

  const fetchTasks = async () => {
    const searchOptions = {
      completed:
        completedFilter === "all" ? undefined : completedFilter === "true",
      sortBy: sortBy,
      limit: tasksPerPage,
      skip: (currentPage - 1) * tasksPerPage,
    };

    const response = await getTasks(token, searchOptions);

    if (response.status === 401) {
      logout();
      navigate("/");
    }

    if (response?.success) {
      setTasks(response.data);
      setTotalTasks(response.pagination.totalCount);
    }
  };

  const totalPages = Math.ceil(totalTasks / tasksPerPage);
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex-grow max-w-lg mx-auto mt-8 px-4">
      <div className="mb-4 mt-2">
        <Link
          to="/create-task"
          className="block text-center text-white bg-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4"
        >
          Create New Task +
        </Link>
        <div className="flex justify-between items-center">
          <div className="md:flex w-full items-center mb-4 space-y-2 md:space-y-0 md:space-x-2">
            <div className="md:block flex justify-between">
              <label htmlFor="completedFilter" className="mr-2 text-white">
                Filter:
              </label>
              <select
                id="completedFilter"
                value={completedFilter}
                onChange={(e) => setCompletedFilter(e.target.value)}
                className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="all">All</option>
                <option value="true">Completed</option>
                <option value="false">Incomplete</option>
              </select>
            </div>
            <div className="md:block flex justify-between">
              <label htmlFor="tasksPerPage" className="mr-2 text-white">
                Tasks per Page:
              </label>
              <select
                id="tasksPerPage"
                value={tasksPerPage}
                onChange={(e) => setTasksPerPage(Number(e.target.value))}
                className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="md:block flex justify-between">
              <label htmlFor="sortBy" className="mr-2 text-white">
                Sort by:
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="createdAt:desc">Newest</option>
                <option value="updatedAt:desc">Last Updated</option>
              </select>
            </div>
          </div>
        </div>
        {tasks.map((task, index) => (
          <TaskItem key={`${task._id}-${index}`} task={task} />
        ))}
        <div className="text-center">
          <button
            onClick={handlePreviousPage}
            disabled={!hasPreviousPage}
            className={`mx-1 px-3 py-2 cursor-pointer rounded-full ${
              hasPreviousPage
                ? "bg-white text-blue-600 hover:bg-blue-200"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            {...(!hasNextPage && { disabled: true })}
            className={`mx-1 px-3 py-2 cursor-pointer rounded-full ${
              hasNextPage
                ? "bg-white text-blue-600 hover:bg-blue-200"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
