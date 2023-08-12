const url = process.env.REACT_APP_API_URL;

const createUser = async (user) => {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.status !== 201) console.log("Error creating user");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const loginUser = async (user) => {
  try {
    const response = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.status !== 200) console.log("Error logging in user");
    const data = await response.json();
    return data;
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};

const logoutUser = async (userId, authToken) => {
  try {
    const response = await fetch(`${url}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error logging out user");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const logoutAllUsers = async (userId, authToken) => {
  try {
    const response = await fetch(`${url}/users/logoutAll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status !== 200) console.log("Error logging out all users");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { createUser, loginUser, logoutUser, logoutAllUsers };
