import React from "react";
import { useNavigate } from "react-router-dom";
import { sendFeedback } from "../../api/user";
import { Formik, Form, Field } from "formik";
import { useUserContext } from "../../Context/UserContext";

const Contact = () => {
  const navigate = useNavigate();
  const { token, logout } = useUserContext();

  const handleSubmit = async (values, { resetForm }) => {
    if (!token || !logout) {
      alert("You must be logged in to send feedback");
      navigate("/");
    }
    const response = await sendFeedback(values, token);
    if (response.status === 401) {
      logout();
      navigate("/");
    }
    if (response?.success) resetForm();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6">
          Have a question, feedback, or just want to say hi? We'd love to hear
          from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Your Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                    placeholder="Your message here"
                  ></Field>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </Form>
            </Formik>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Feel free to contact me using the details below:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Email:{" "}
                <a
                  href="mailto:20je0649@pe.iitism.ac.in"
                  className="text-cyan-500 hover:underline"
                >
                  20je0649@pe.iitism.ac.in
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="http://omdubey.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline"
                >
                  omdubey.me
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/om-dubey-975a32210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline"
                >
                  Om Dubey
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="
                    https://www.github.com/om205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline"
                >
                  om205
                </a>
              </li>
              <li>Address: IIT(ISM) Dhanbad 👇</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-60 md:h-96">
          <iframe
            title="IIT(ISM) Dhanbad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4962.393576087622!2d86.44121157659092!3d23.817481286253745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1691785553630!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
