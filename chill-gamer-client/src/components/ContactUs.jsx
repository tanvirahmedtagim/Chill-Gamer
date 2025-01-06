import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-800 text-white rounded-lg py-16 mt-8 md:mt-14">
      <div className="w-11/12 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-white text-center leading-relaxed mb-10">
          Have a question, suggestion, or just want to connect? We'd love to
          hear from you! Fill out the form below, and our team will get back to
          you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
