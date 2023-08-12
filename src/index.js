import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Account from "./Components/Account/Account";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/Error/NotFound";
import CreateTask from "./Components/Home/Task/CreateTask";
import Task from "./Components/Home/Task/Task";
import EditTask from "./Components/Home/Task/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
      { path: "account", Component: Account },
      { path: "contact", Component: Contact },
      { path: "create-task", Component: CreateTask },
      { path: "edit-task/:taskId", Component: EditTask },
      { path: "task/:id", Component: Task },
    ],
  },
  { path: "*", Component: NotFound },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
