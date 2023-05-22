import React from "react";
import { Link } from "react-router-dom";

const InvalidRoute = () => {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen gap-3">
        <h2 className="text-3xl font-medium">Page Not Found!</h2>
        <p>The page you are looking for does not exist.</p>
        <Link
          to={"/"}
          className=" px-5 py-[5px] bg-black text-white rounded-sm "
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default InvalidRoute;
