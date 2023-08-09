import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { useUserContext } from "../../Context/UserContext";
import { getProfile } from "../../api/user";
// import Avatar from "./Avatar";

export default function AccountPage() {
  // const { user, token, updateUser } = useUserContext();

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const data = await getProfile(user?._id, token);
  //     updateUser(data);
  //   };
  //   fetchProfile();
  // }, [token, updateUser, user._id]);

  // const initialValues = {
  //   name: user?.name || "Om",
  //   email: user?.email || "a@b.com",
  //   age: user?.age || 0,
  // };

  // const handleSubmit = async (values) => {
  //   // Assuming you have an updateUser function to update user data
  //   await updateUser(values);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Account Information</h1>
      {/* <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="max-w-md">
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
          <div className="mb-4">
            <label className="block font-medium mb-2">Profile Photo</label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </Form>
      </Formik> */}
    </div>
  );
}
