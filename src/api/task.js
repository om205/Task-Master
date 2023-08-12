const url = process.env.REACT_APP_API_URL;

const createTask = async (task, authToken) => {
  try {
    const response = await fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(task),
    });
    if (response.status !== 201) console.log("Error creating task");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const getTasks = async (authToken, options = {}) => {
  const { filter, limit, skip, sortBy, completed } = options;
  let queryString = `${url}/tasks?`;

  if (filter !== undefined) {
    queryString += `completed=${filter}&`;
  }
  if (limit !== undefined) {
    queryString += `limit=${limit}&`;
  }
  if (skip !== undefined) {
    queryString += `skip=${skip}&`;
  }
  if (sortBy !== undefined) {
    queryString += `sortBy=${sortBy}&`;
  }
  if (completed !== undefined) {
    queryString += `completed=${completed}&`;
  }

  try {
    const response = await fetch(queryString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error getting tasks");
    const data = await response.json();
    data.status = response.status;
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
    data.status = response.status;
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const updateTask = async (id, task, authToken) => {
  const updates = {};
  if (task.description) updates.description = task.description;
  if (task.title) updates.title = task.title;
  if (task.completed) updates.completed = task.completed;
  try {
    const response = await fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },

      body: JSON.stringify(updates),
    });
    if (response.status !== 200) console.log("Error updating task");
    const data = await response.json();
    data.status = response.status;
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
    data.status = response.status;
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
