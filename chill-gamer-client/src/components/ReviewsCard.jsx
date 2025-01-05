import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Importing a star icon for the rating

const ReviewsCard = ({ review }) => {
  const {
    _id,
    gameCover,
    gameTitle,
    rating,
    publishingYear,
    genre,
    email,
    name,
  } = review || {};
  return (
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 ease-in-out">
      <img
        src={gameCover}
        alt={gameTitle}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 truncate mb-3 hover:text-blue-600 transition-colors duration-200">
          {gameTitle}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2 text-yellow-500">
            <FaStar className="text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">📅 {publishingYear}</span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">🎮 {genre}</span>
          </p>
        </div>

        <Link
          to={`/review/${_id}`}
          className="inline-block mt-6 py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transform transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewsCard;
