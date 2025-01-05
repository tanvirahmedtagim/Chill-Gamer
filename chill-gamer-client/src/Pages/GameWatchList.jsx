import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const GameWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      setLoading(true); 
      fetch(
        `https://chill-gamer-server-nine.vercel.app/watchlist?email=${encodeURIComponent(
          user.email
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWatchlist(data);
        })
        .catch((error) => {
          console.error("Error fetching watchlist:", error);
        })
        .finally(() => {
          setLoading(false); 
        });
    }
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Watchlist</h1>

      {loading ? (
        <p className="text-center">
          <span className="loading loading-spinner text-info"></span>
        </p>
      ) : watchlist.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no games in your watchlist.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-center">Game Cover</th>
                <th className="border px-4 py-2 text-center">Game Title</th>
                <th className="border px-4 py-2 text-center">Description</th>
                <th className="border px-4 py-2 text-center">
                  Publishing Year
                </th>
                <th className="border px-4 py-2 text-center">Genre</th>
                <th className="border px-4 py-2 text-center">Rating</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">
                    <img
                      src={item.gameCover}
                      alt={item.gameTitle}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.gameTitle}</td>
                  <td className="border px-4 py-2">{item.description}</td>
                  <td className="border px-4 py-2">{item.publishingYear}</td>
                  <td className="border px-4 py-2">{item.genre}</td>
                  <td className="border px-4 py-2">{item.rating}/5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameWatchlist;
