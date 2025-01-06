import React, { useContext } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ReviewDetails = () => {
  const { id } = useParams();
  const singleReview = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    gameCover,
    gameTitle,
    description,
    rating,
    publishingYear,
    genre,
    email,
    name,
  } = singleReview || {};

  const handleAddToWatchList = () => {
    if (!user) {
      // Redirect to login if user is not logged in
      Swal.fire({
        title: "Unauthorized!",
        text: "You need to log in to add items to your watchlist.",
        icon: "warning",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Replace "/login" with your actual login route
        }
      });
      return;
    }

    const watchListItem = {
      gameCover,
      gameTitle,
      description,
      rating,
      publishingYear,
      genre,
      email: user?.email,
      name,
    };

    fetch("https://chill-gamer-server-nine.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListItem),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review Added To Watchlist successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding to watchlist:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="w-full md:my-[66px] my-8">
      <div className="card lg:card-side bg-gradient-to-r from-[#ff6700] to-[#999595] text-white shadow-xl rounded-lg overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <img
            src={gameCover}
            alt={gameTitle}
            className="object-cover w-full h-64 lg:h-full lg:w-full rounded-lg"
          />
        </figure>
        <div className="card-body w-full lg:w-1/2 p-4 lg:p-6">
          <h2 className="card-title text-2xl lg:text-3xl font-semibold mb-2">
            {gameTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-900 mb-4">
            {description}
          </p>
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-between mb-4">
            <span className="badge badge-outline text-base lg:text-lg font-semibold mb-2 lg:mb-0">
              {genre}
            </span>
            <span className="badge badge-success text-base lg:text-lg font-semibold">
              Rating: {rating}/5
            </span>
          </div>
          <div className="text-xl text-gray-900 mb-4 flex md:flex-row flex-col justify-between">
            <p>
              <span className="font-semibold">Reviewed by:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-block px-6 py-3 text-lg font-semibold rounded-lg bg-[#ff6700] hover:bg-[#cc5200] transition-colors mb-4 lg:mb-0"
              onClick={handleAddToWatchList}
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
