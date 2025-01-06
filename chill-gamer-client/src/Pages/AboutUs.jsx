import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 w-full mx-auto">
      <div className="">
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-orange-600">Chill Gamer</span> –
          your ultimate hub for exploring and sharing game reviews. Gaming is
          more than just a pastime; it’s an art, a community, and an adventure.
          At Build Chill Gamer, we aim to celebrate this vibrant world by
          providing a space where gamers can come together to share their
          thoughts, discover new titles, and engage with a like-minded
          community.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our platform is designed with a focus on simplicity, functionality,
          and a "chill" user experience. From in-depth reviews of popular titles
          to hidden gems, our user-friendly interface makes it easy to find and
          share valuable insights. With features like{" "}
          <span className="font-semibold text-orange-600">
            user authentication
          </span>
          , personalized accounts, and{" "}
          <span className="font-semibold text-orange-600">
            review management
          </span>
          , you have the tools to express your opinions and make your voice
          heard.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're a casual gamer looking for your next adventure or a
          seasoned enthusiast eager to contribute to the gaming community,{" "}
          <span className="font-semibold text-orange-600">
            Build Chill Gamer
          </span>{" "}
          is here to make your journey exciting and meaningful. Let’s come
          together to celebrate gaming in its most inclusive and engaging form.
        </p>
        <div className="mt-10 text-center">
          <Link
            to="/reviews" // Use Link to navigate to the Reviews page
            className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-500 transition duration-300 inline-block"
          >
            Explore Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
