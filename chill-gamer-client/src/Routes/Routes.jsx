import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Pages/AddReviews";
import MyReviews from "../Pages/MyReviews";
import GameWatchList from "../Pages/GameWatchList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import ReviewDetails from "../components/ReviewDetails";
import UpdateReview from "../Pages/UpdateReview";
import AboutUs from "../Pages/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chill-gamer-server-nine.vercel.app/reviews"),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch("https://chill-gamer-server-nine.vercel.app/reviews"),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoutes>
            <ReviewDetails></ReviewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-nine.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoutes>
            <AddReviews></AddReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoutes>
            <UpdateReview></UpdateReview>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-nine.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoutes>
            <GameWatchList></GameWatchList>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element:<AboutUs></AboutUs>
      },
    ],
  },
]);
export default router;
