import React from "react";

const LeaderBoard = ({ theme }) => {
  const leaderboardData = {
    helpfulReviews: [
      {
        user: "Alex Miller",
        avatar: "https://i.ibb.co.com/tCjsW7s/user12.jpg",
        review: "Amazing Game! Must play for all fans of RPGs!",
        likes: 120,
        rank: 1,
      },
      {
        user: "Jordan Smith",
        avatar: "https://i.ibb.co.com/LPNsnfr/user11.jpg",
        review: "A must-play for fans of classic shooters!",
        likes: 100,
        rank: 2,
      },
      {
        user: "Emily Rogers",
        avatar: "https://i.ibb.co.com/nDsgP2n/user13.jpg",
        review: "Best RPG ever, with a rich story and deep gameplay.",
        likes: 95,
        rank: 3,
      },
    ],
    likedReviews: [
      {
        user: "Chris Johnson",
        avatar: "https://i.ibb.co.com/2jRDVCT/user14.jpg",
        review: "Incredible graphics and immersive gameplay.",
        likes: 250,
        rank: 1,
      },
      {
        user: "Taylor Brown",
        avatar: "https://i.ibb.co.com/xCcwMvs/user15.jpg",
        review: "A masterpiece of design that everyone should play.",
        likes: 220,
        rank: 2,
      },
      {
        user: "Morgan Davis",
        avatar: "https://i.ibb.co.com/wC0VHVM/user16.jpg",
        review: "A true gem of the gaming world!",
        likes: 210,
        rank: 3,
      },
    ],
    activeUsers: [
      {
        user: "Ryan Wilson",
        avatar: "https://i.ibb.co.com/Tb9nSRB/user17.jpg",
        reviews: 200,
        rank: 1,
      },
      {
        user: "Jamie Clark",
        avatar: "https://i.ibb.co.com/p2PBZK7/user18.jpg",
        reviews: 150,
        rank: 2,
      },
      {
        user: "Avery Martinez",
        avatar: "https://i.ibb.co.com/tYXpZrH/user19.jpg",
        reviews: 120,
        rank: 3,
      },
    ],
  };

  return (
    <section
      className={`md:mt-20  mt-8  ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
        Leaderboard
      </h2>
      <p
        className={`md:text-lg mb-6 text-center lg:w-2/3 md:3/4 mx-auto  ${
          theme === "light" ? "text-gray-700" : "bg-gray-900"
        }`}
      >
        Celebrate the top contributors on our platform. Check out the most
        helpful reviews, most liked content, and most active users. Join the fun
        and earn rewards!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div
          className={`col-span-1 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
            theme === "light" ? "bg-gray-700" : "bg-gray-700"
          } text-white`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Most Helpful Reviews
          </h3>
          <ul>
            {leaderboardData.helpfulReviews.map((entry) => (
              <li
                key={entry.rank}
                className="flex items-center mb-6 hover:bg-opacity-90 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full border-4 border-white mr-4 transition-transform transform hover:scale-110">
                  <img
                    src={entry.avatar}
                    alt={entry.user}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-orange-400">
                    {entry.user}
                  </p>
                  <p className="text-sm italic text-gray-300">{entry.review}</p>
                  <p className="text-lg text-orange-500 mt-2">
                    Likes: {entry.likes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Liked Reviews */}
        <div
          className={`col-span-1 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
            theme === "light" ? "bg-gray-700" : "bg-gray-700"
          } text-white`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Most Liked Reviews
          </h3>
          <ul>
            {leaderboardData.likedReviews.map((entry) => (
              <li
                key={entry.rank}
                className="flex items-center mb-6 hover:bg-opacity-90 transition duration-300"
              >
                <img
                  src={entry.avatar}
                  alt={entry.user}
                  className="w-14 h-14 rounded-full border-4 border-white mr-4 transition-transform transform hover:scale-110"
                />
                <div>
                  <p className="font-bold text-lg text-orange-400">
                    {entry.user}
                  </p>
                  <p className="text-sm italic text-gray-300">{entry.review}</p>
                  <p className="text-lg text-orange-500 mt-2">
                    Likes: {entry.likes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Active Users */}
        <div
          className={`col-span-1 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
            theme === "light" ? "bg-gray-700" : "bg-gray-700"
          } text-white`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Most Active Users
          </h3>
          <ul>
            {leaderboardData.activeUsers.map((entry) => (
              <li
                key={entry.rank}
                className="flex items-center mb-6 hover:bg-opacity-90 transition duration-300"
              >
                <img
                  src={entry.avatar}
                  alt={entry.user}
                  className="w-14 h-14 rounded-full border-4 border-white mr-4 transition-transform transform hover:scale-110"
                />
                <div>
                  <p className="font-bold text-lg text-orange-400">
                    {entry.user}
                  </p>
                  <p className="text-sm text-gray-300">
                    Reviews: {entry.reviews}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
