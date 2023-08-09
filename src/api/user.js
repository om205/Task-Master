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
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

export { getProfile, getAvatar };
