import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/authApi";
import { useUserContext } from "../../Context/UserContext";

export default function SignUp() {
  const { updateUser, updateToken } = useUserContext();
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");

  const SignUpFormValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    const response = await createUser(values);
    console.log(response);
    if (response?.success) {
      updateToken(response?.data?.token);
      updateUser(response?.data?.user);
      navigate("/");
    } else {
      setSignUpError(response?.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex-grow px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-6 shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={SignUpFormValidation}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="mb-4">
                <label className="block font-semibold text-gray-700">
                  Name
                </label>
                <Field
                  name="name"
                  placeholder="name"
                  className="border rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  placeholder="Email"
                  className="border rounded w-full p-2"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border rounded w-full p-2"
                />

                {errors.password && touched.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
              {signUpError && (
                <p className="text-red-500 mt-2 flex items-center">
                  {signUpError}
                </p>
              )}
            </Form>
          )}
        </Formik>
        <div className="text-right text-gray-400 my-8">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
