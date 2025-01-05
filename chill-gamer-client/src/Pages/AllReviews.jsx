import React, { useState, useEffect } from "react";
import ReviewsCard from "../components/ReviewsCard";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [genre, setGenre] = useState("All");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleReviews, setVisibleReviews] = useState(8); // Start with 8 visible reviews

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        ...(genre !== "All" && { genre }),
        ...(sortField && { sortField }),
        ...(sortOrder && { sortOrder }),
      });

      const response = await fetch(
        `https://chill-gamer-server-nine.vercel.app/reviews?${query.toString()}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewMore = () => {
    setVisibleReviews((prev) => prev + 8); // Increase visible reviews by 8
  };

  const handleViewLess = () => {
    setVisibleReviews(8); // Reset to the initial 8 reviews
  };

  useEffect(() => {
    fetchReviews();
  }, [genre, sortField, sortOrder]);

  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4 gap-4">
        <div className="w-full md:w-auto">
          <select
            className="select select-bordered w-full"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <select
            className="select select-bordered w-full md:w-auto"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>

          <select
            className="select select-bordered w-full md:w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-8">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-gray-600">No reviews found.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.slice(0, visibleReviews).map((review) => (
              <ReviewsCard key={review._id} review={review} />
            ))}
          </div>

          {visibleReviews < reviews.length ? (
            <div className="text-center mt-6">
              <button
                onClick={handleViewMore}
                className="btn bg-orange-600 text-white hover:bg-orange-700"
              >
                View More
              </button>
            </div>
          ) : (
            <div className="text-center mt-6">
              <button
                onClick={handleViewLess}
                className="btn bg-gray-600 text-white hover:bg-gray-700"
              >
                View Less
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllReviews;
