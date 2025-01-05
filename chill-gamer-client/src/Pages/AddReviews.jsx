import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);

  const genres = ["Action", "RPG", "Adventure", "Shooter", "Puzzle"];

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;

    const newReview = {
      gameCover,
      gameTitle,
      description,
      rating,
      publishingYear,
      genre,
      email,
      name,
    };

    fetch("https://chill-gamer-server-nine.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          formRef.current.reset();
          // toast.success("Review submitted successfully!");
          Swal.fire({
            title: "Success!",
            text: "Review Added successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-xl rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Add New Review
      </h1>
      <form ref={formRef} onSubmit={handleAddReview} className="space-y-6">
        {/* Game Cover URL */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Game Cover Image (URL)
            </label>
            <input
              type="text"
              name="gameCover"
              required
              placeholder="Enter image URL"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder:text-gray-400"
            />
          </div>

          {/* Game Title */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Game Title
            </label>
            <input
              type="text"
              name="gameTitle"
              required
              placeholder="Enter game title"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Review Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Review Description
          </label>
          <textarea
            name="description"
            placeholder="Write a brief review..."
            rows="4"
            required
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder:text-gray-400"
          />
        </div>

        {/* Rating */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating (1-5)"
              min="1"
              max="5"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder:text-gray-400"
            />
          </div>

          {/* Publishing Year */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Publishing Year
            </label>
            <input
              type="number"
              name="publishingYear"
              placeholder="Example: 2023"
              maxLength="4"
              min="1980"
              max="2080"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            name="genre"
            required
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-100 rounded-lg"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              className="w-full px-4 py-3 mt-2 border border-gray-300 bg-gray-100 rounded-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviews;
