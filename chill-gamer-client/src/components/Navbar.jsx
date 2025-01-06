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
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/reviews">ALL REVIEWS</NavLink>
      <NavLink to="/about">ABOUT US</NavLink>
      {user ? (
        <>
          <NavLink to="/addReview">ADD REVIEW</NavLink>
          <NavLink to="/myReviews">MY REVIEWS</NavLink>
          <NavLink to="/myWatchlist">GAME WATCHLIST</NavLink>
          <Link to="/" onClick={handleLogout}>
            LOGOUT
          </Link>
        </>
      ) : (
        <>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </>
      )}
    </>
  );

  return (
    <div
      className={` lg:px-[64.35px] md:px-8 px-3 fixed z-10 w-full ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-700 text-white"
      }`}
    >
      {" "}
      <div className="navbar justify-between px-0">
        <div className="navbar-start w-70% lg:w-[10%]">
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
          <div className="flex w-full gap-2 md:items-center">
            {" "}
            <div className="lg:h-12 md:h-10 h-8 ">
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="font-bold md:block hidden">
              <span className="text-orange-500">C</span>HILL GAMER
            </div>
          </div>
        </div>

        <div className="navbar-center lg:w-[80%] hidden lg:flex justify-center">
          <ul className="menu menu-horizontal text-lg px-1 flex gap-5 items-center justify-center">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-4   w-[10%]">
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

          {user && (
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
            </div>
          )}
        </div>

        <Tooltip id="my-tooltip" style={{ zIndex: 1000 }} />
      </div>
    </div>
  );
};

export default Navbar;
