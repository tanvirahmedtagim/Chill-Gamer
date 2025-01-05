import React from "react";
import ErrorImg from "../assets/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center md:h-[500px] h-[300px] lg:mt-16 md:mt-0 mt-20 ">
        <img className="h-full" src={ErrorImg} alt="" />
      </div>
      <button className="btn btn-outline btn-secondary">
        <Link to="/">Go To Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
