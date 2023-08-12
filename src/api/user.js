const url = process.env.REACT_APP_API_URL;

const getProfile = async (userId, authtoken) => {
  try {
    const response = await fetch(`${url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`,
      },
    });
    if (response.status !== 200) console.log("Error getting user profile");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

const updateUser = async (updates, authtoken) => {
  try {
    const response = await fetch(`${url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`,
      },
      body: JSON.stringify(updates),
    });
    if (response.status !== 200) console.log("Error updating user profile");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

const sendFeedback = async (feedback, authtoken) => {
  try {
    const response = await fetch(`${url}/users/me/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`,
      },
      body: JSON.stringify(feedback),
    });

    if (response.status !== 200) console.log("Error sending feedback");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

const getAvatar = async (userId, authtoken) => {
  try {
    const response = await fetch(`${url}/users/${userId}/avatar`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`,
      },
    });
    if (response.status !== 200) console.log("Error getting user avatar");
    const data = await response.blob();
    return { success: true, data, status: response.status };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};
const uploadAvatar = async (formData, authtoken) => {
  try {
    const response = await fetch(`${url}/users/me/avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
      body: formData,
    });
    if (response.status !== 200) console.log("Error uploading user avatar");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

const deleteAvatar = async (authtoken) => {
  try {
    const response = await fetch(`${url}/users/me/avatar`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
    });
    if (response.status !== 200) console.log("Error deleting user avatar");
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

export {
  getProfile,
  getAvatar,
  sendFeedback,
  uploadAvatar,
  deleteAvatar,
  updateUser,
};
