import React, { useState } from "react";
import Welcome from "./Welcome";
import TaskList from "./Tasks/TaskList";
import { useUserContext } from "../../Context/UserContext";

export default function Home() {
  const { user } = useUserContext();

  if (!user) return <Welcome />;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <TaskList />
    </div>
  );

  // const filteredTasks =
  //   filter === "all"
  //     ? tasks
  //     : tasks.filter((task) =>
  //         filter === "complete" ? task.complete : !task.complete
  //       );

  // return (
  //   <div className="container mx-auto p-8">
  //     <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>

  //     <div className="flex mb-4">
  //       <input
  //         type="text"
  //         placeholder="Add a new task"
  //         className="p-2 border border-gray-300 rounded-l"
  //         value={newTask}
  //         onChange={(e) => setNewTask(e.target.value)}
  //       />
  //       <button
  //         onClick={handleAddTask}
  //         className="bg-blue-500 text-white px-4 py-2 rounded-r"
  //       >
  //         Add
  //       </button>
  //     </div>

  //     <div className="flex mb-4">
  //       <button
  //         onClick={() => setFilter("all")}
  //         className={`mr-2 ${
  //           filter === "all"
  //             ? "bg-blue-500 text-white"
  //             : "bg-gray-300 text-gray-600"
  //         } px-3 py-2 rounded`}
  //       >
  //         All
  //       </button>
  //       <button
  //         onClick={() => setFilter("complete")}
  //         className={`mr-2 ${
  //           filter === "complete"
  //             ? "bg-blue-500 text-white"
  //             : "bg-gray-300 text-gray-600"
  //         } px-3 py-2 rounded`}
  //       >
  //         Complete
  //       </button>
  //       <button
  //         onClick={() => setFilter("incomplete")}
  //         className={`mr-2 ${
  //           filter === "incomplete"
  //             ? "bg-blue-500 text-white"
  //             : "bg-gray-300 text-gray-600"
  //         } px-3 py-2 rounded`}
  //       >
  //         Incomplete
  //       </button>
  //     </div>

  //     <ul>
  //       {filteredTasks.map((task) => (
  //         <li key={task.id} className="mb-2 flex items-center">
  //           <input
  //             type="checkbox"
  //             checked={task.complete}
  //             onChange={() => handleToggleComplete(task.id)}
  //             className="mr-2"
  //           />
  //           <span className={task.complete ? "line-through" : ""}>
  //             {task.title}
  //           </span>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
