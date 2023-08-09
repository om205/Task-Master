import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6">
          Have a question, feedback, or just want to say hi? I'd love to hear
          from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                  placeholder="Your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
