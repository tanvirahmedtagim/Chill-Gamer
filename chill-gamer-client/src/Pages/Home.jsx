import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Link, useOutletContext } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard";
import { FaStar, FaCalendarAlt, FaGamepad } from "react-icons/fa";

const Home = () => {
  const { theme } = useOutletContext();
  const [reviews, setReviews] = useState([]);
  const [lowestRated, setLowestRated] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(8); // Limit for "Highest Rated Games"

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://chill-gamer-server-nine.vercel.app/home-reviews"
        );
        const data = await response.json();

        // Set the highest rated and lowest rated games
        setReviews(data.highestRated);
        setLowestRated(data.lowestRated);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleViewMore = () => setVisibleReviews((prev) => prev + 8);
  const handleViewLess = () => setVisibleReviews(8);

  return (
    <div
      className={`min-h-screen mt-11 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div>
        <Carousel />

        {/* Highest Rated Games Section */}
        <section id="highestRated" className="md:mt-14 mt-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Highest Rated Game
          </h2>
          <p className="md:text-lg mb-6 text-center lg:w-2/3 md:3/4 mx-auto">
            Discover the top-rated games that have captivated players worldwide.
            From innovative gameplay to stunning visuals, these games stand out
            for their exceptional design, storytelling, and immersive
            experiences.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {reviews.slice(0, visibleReviews).map((review) => (
              <div
                key={review._id}
                className={`rounded-lg p-4 shadow-lg border ${
                  theme === "dark"
                    ? "bg-gray-900 text-white border-gray-700"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                <img
                  src={review.gameCover}
                  alt={review.gameTitle}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-bold truncate">
                  {review.gameTitle}
                </h3>
                <div className="flex items-center justify-between text-sm my-2">
                  <p className="flex items-center gap-1 text-orange-500">
                    <FaStar /> {review.rating}
                  </p>
                  <p className="flex items-center gap-1 text-gray-500">
                    <FaCalendarAlt /> {review.publishingYear || "N/A"}
                  </p>
                  <p className="flex items-center gap-1 text-gray-500">
                    <FaGamepad /> {review.genre}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <Link
                    to={`/review/${review._id}`}
                    className={`inline-block w-full py-2 px-4 text-sm font-medium rounded-lg ${
                      theme === "dark"
                        ? "bg-orange-600 hover:bg-orange-500 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    Explore Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less Buttons */}
          <div className="text-center mt-6">
            {visibleReviews < reviews.length ? (
              <button
                onClick={handleViewMore}
                className={`btn bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-lg`}
              >
                View More
              </button>
            ) : (
              <button
                onClick={handleViewLess}
                className={`btn bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-lg`}
              >
                View Less
              </button>
            )}
          </div>
        </section>

        {/* Lowest Rated Games Section */}
        <section id="lowestRated" className="md:mt-20 mt-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Games That Flopped But Deserve a Second Look
          </h2>
          <p className="md:text-lg mb-6 text-center lg:w-2/3 md:3/4 mx-auto">
            Highlighting games that may have stumbled upon release but offer
            hidden gems of gameplay, storytelling, and cult appeal.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {lowestRated.map((game) => (
              <div
                key={game._id}
                className={`rounded-lg p-4 shadow-lg border ${
                  theme === "dark"
                    ? "bg-gray-900 text-white border-gray-700"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                <img
                  src={game.gameCover}
                  alt={game.gameTitle}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-bold">{game.gameTitle}</h3>
                <div className="flex items-center justify-between text-sm my-4">
                  <p className="flex items-center gap-1 text-red-500">
                    <FaStar /> {game.rating}
                  </p>
                  <p className="flex items-center gap-1 text-gray-500">
                    <FaCalendarAlt /> {game.publishingYear || "N/A"}
                  </p>
                  <p className="flex items-center gap-1 text-gray-500">
                    <FaGamepad /> {game.genre}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <Link
                    to={`/review/${game._id}`}
                    className={`inline-block w-full py-2 px-4 text-sm font-medium rounded-lg ${
                      theme === "dark"
                        ? "bg-orange-600 hover:bg-orange-500 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    Explore Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <LeaderBoard theme={theme} />
      </div>
    </div>
  );
};

export default Home;
