// import React, { useState } from "react";

// const filterOptions = [
//   { label: "All", value: "all" },
//   { label: "Complete", value: "complete" },
//   { label: "Incomplete", value: "incomplete" },
// ];

// export default function Home() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all"); // "all", "complete", "incomplete"
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), title: newTask, complete: false }]);
//     setNewTask("");
//   };

//   const handleToggleComplete = (taskId) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, complete: !task.complete } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const filteredTasks =
//     filter === "all"
//       ? tasks
//       : tasks.filter((task) =>
//           filter === "complete" ? task.complete : !task.complete
//         );

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           className="p-2 border border-gray-300 rounded-l"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button
//           onClick={handleAddTask}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r"
//         >
//           Add
//         </button>
//       </div>

//       <div className="flex mb-4">
//         <button
//           onClick={() => setFilter("all")}
//           className={`mr-2 ${
//             filter === "all"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300 text-gray-600"
//           } px-3 py-2 rounded`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilter("complete")}
//           className={`mr-2 ${
//             filter === "complete"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300 text-gray-600"
//           } px-3 py-2 rounded`}
//         >
//           Complete
//         </button>
//         <button
//           onClick={() => setFilter("incomplete")}
//           className={`mr-2 ${
//             filter === "incomplete"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300 text-gray-600"
//           } px-3 py-2 rounded`}
//         >
//           Incomplete
//         </button>
//       </div>

//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id} className="mb-2 flex items-center">
//             <input
//               type="checkbox"
//               checked={task.complete}
//               onChange={() => handleToggleComplete(task.id)}
//               className="mr-2"
//             />
//             <span className={task.complete ? "line-through" : ""}>
//               {task.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900 min-h-[85vh] flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Welcome to TaskMaster!
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          Your Ultimate Task Management Solution
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
        <p className="text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 underline">
            Login here
          </Link>
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 text-white text-center bg-blue-900">
        © 2023 TaskMaster. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
