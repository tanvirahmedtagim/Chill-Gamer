import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (user?.email) {
      setLoading(true); 
      fetch(
        `https://chill-gamer-server-nine.vercel.app/myReviews?email=${encodeURIComponent(
          user.email
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyReviews(data);
        })
        .finally(() => {
          setLoading(false); 
        });
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-nine.vercel.app/myReviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myReviews.filter(
                (myReview) => myReview._id !== _id
              );
              setMyReviews(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-reviews-container p-4 sm:p-6">
      <h1 className="text-xl text-center sm:text-2xl font-bold text-gray-800 mb-4">
        My Reviews
      </h1>

      {loading ? (
        <div className="text-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : myReviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Game Title
                </th>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Description
                </th>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Rating
                </th>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Publishing Year
                </th>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Genre
                </th>
                <th className="px-2 py-3 text-lg font-semibold text-gray-800 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review) => (
                <tr key={review._id}>
                  <td className="px-2 py-2 text-center">{review.gameTitle}</td>
                  <td className="px-2 py-2 text-center">
                    {review.description}
                  </td>
                  <td className="px-2 py-2 text-center">{review.rating}/5</td>
                  <td className="px-2 py-2 text-center">
                    {review.publishingYear}
                  </td>
                  <td className="px-2 py-2 text-center">{review.genre}</td>
                  <td className="flex flex-col lg:flex-row lg:mt-0 justify-center items-center md:mt-6 mt-20 gap-2">
                    <Link
                      to={`/updateReview/${review._id}`}
                      className="btn bg-black text-white hover:bg-white hover:text-black"
                    >
                      <FaPen size={18}></FaPen>
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn bg-red-600 text-white hover:bg-white hover:text-red-600"
                    >
                      <MdDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
