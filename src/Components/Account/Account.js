import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  getAvatar,
  deleteAvatar,
  uploadAvatar,
  updateUser as updateUserApi,
} from "../../api/user";

export default function AccountPage() {
  const { user, token, updateUser, logout } = useUserContext();
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const fetchAvatar = async () => {
    const avatarData = await getAvatar(user?._id, token);
    if (avatarData.status === 401) {
      logout();
      navigate("/");
    }
    if (avatarData?.success && avatarData.status !== 404) {
      const imageUrl = URL.createObjectURL(avatarData.data);
      setAvatar(imageUrl);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfile(user?._id, token);
      if (response.status === 401) {
        logout();
        navigate("/");
      }
      if (response?.success) updateUser(response.data);
    };
    fetchProfile();

    if (user && !avatar) {
      fetchAvatar();
    }
  }, [token]);

  if (!user || !token) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white  text-center">
        <h2 className="text-2xl font-bold mb-4">Account Information</h2>
        <p className="text-gray-600 mb-6">
          You need to be logged in to access your account.
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
        >
          Log In
        </Link>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    );
  }

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
    age: user?.age || 0,
  };

  const handleSubmit = async (values) => {
    const response = await updateUserApi(values, token);
    console.log(response);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) updateUser(response.data);
  };

  const handleAvatarUpload = async (event) => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const response = await uploadAvatar(formData, token);
    if (response?.success) {
      fetchAvatar();
      setErrorMessage(null);
    } else setErrorMessage(response?.message);
  };

  const handleAvatarDelete = async () => {
    const response = await deleteAvatar(token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) {
      setAvatar(null);
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="text-2xl font-bold w-max mb-4">Account Information</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="max-w-md">
          <div className="mb-4">
            <label className="block font-medium mb-2">Profile Photo</label>
            {avatar ? (
              <div className="flex items-center">
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={handleAvatarDelete}
                >
                  Delete Avatar
                </button>
              </div>
            ) : (
              <input
                type="file"
                name="avatar"
                onChange={handleAvatarUpload}
                className="border max-w-[90vw] rounded px-3 py-2"
              />
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Age</label>
            <Field
              type="number"
              name="age"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </Form>
      </Formik>
    </div>
  );
}
