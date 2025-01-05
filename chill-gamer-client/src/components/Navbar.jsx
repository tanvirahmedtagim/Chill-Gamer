import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png";
import { Tooltip } from "react-tooltip";
import { IoSunny, IoMoon } from "react-icons/io5";

const Navbar = ({ toggleTheme, theme }) => {
  const navigate = useNavigate();
  const { user, handleLogout, setLoading } = useContext(AuthContext);

  const handleSignOut = async () => {
    setLoading(true);
    await handleLogout().then(() => {
      navigate("/");
      setLoading(false);
    });
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/reviews">All Reviews</NavLink>
      {user && (
        <>
          <NavLink to="/addReview">Add Review</NavLink>
          <NavLink to="/myReviews">My Reviews</NavLink>
          <NavLink to="/myWatchlist">Game WatchList</NavLink>
        </>
      )}
    </>
  );

  return (
    <div
      className={`navbar px-0 md:px-2 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="navbar-start lg:w-[10%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            } rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            {links}
          </ul>
        </div>
        <div className="lg:h-12 h-8">
          <img className="w-full h-full object-cover" src={logo} alt="Logo" />
        </div>
      </div>

      <div className="navbar-center lg:w-[80%] hidden lg:flex justify-center">
        <ul className="menu menu-horizontal text-lg px-1 flex gap-5 items-center justify-center">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-4 lg:w-[10%]">
        <button
          onClick={toggleTheme}
          className="text-xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? (
            <IoSunny className="text-yellow-400" />
          ) : (
            <IoMoon />
          )}
        </button>

        {user ? (
          <div className="flex gap-3 items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div
                  className="w-10 h-10 rounded-full tooltip tooltip-bottom"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  data-tooltip-place="top"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                    alt="User"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="btn text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 px-4 py-2 rounded-lg shadow-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      <Tooltip id="my-tooltip" style={{ zIndex: 1000 }} />
    </div>
  );
};

export default Navbar;
