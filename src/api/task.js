const url = process.env.REACT_APP_API_URL;

const createTask = async (description, authToken) => {
  try {
    const response = await fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ description }),
    });
    if (response.status !== 201) console.log("Error creating task");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const getTasks = async (authToken) => {
  try {
    const response = await fetch(`${url}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error getting tasks");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const getTask = async (taskId, authToken) => {
  try {
    const response = await fetch(`${url}/tasks/${taskId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error getting task");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const updateTask = async (taskId, updates, authToken) => {
  try {
    const response = await fetch(`${url}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${authToken}`,
      },

      body: JSON.stringify(updates),
    });
    if (response.status !== 200) console.log("Error updating task");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const deleteTask = async (taskId, authToken) => {
  try {
    const response = await fetch(`${url}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error deleting task");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
