import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsDownload } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";

const MovieDetail = () => {
  const movie = JSON.parse(Cookies.get("movie"));
  console.log(movie);

  return (
    <div className="flex flex-col lg:flex-row gap-3 p-3 shadow-md items-stretch justify-center mt-3 rounded bg-primary">
      <div className="w-full lg:w-[75%] relative">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
          alt=""
        />

        <div className="absolute top-0">
          <Link
            to={"/"}
            className=" bg-tertiary px-4 py-1 text-primary flex flex-row items-center gap-1 bg-opacity-70 hover:bg-opacity-100 duration-200"
          >
            <IoReturnDownBackOutline className="text-2xl" /> Back
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col h-64 lg:h-auto">
        <h2 className="text-xl font-bold text-text">
          {" "}
          Title - <span className="text-para">{movie?.title}</span>{" "}
        </h2>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <p className="font-medium text-text">
              Released Date -{" "}
              <span className="text-para font-normal">
                {" "}
                {movie?.release_date}{" "}
              </span>{" "}
            </p>

            <p className="font-medium text-text">
              Rating -{" "}
              <span className="text-para font-normal">
                {movie?.vote_average} / 10
              </span>
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="font-medium text-text">
            Overview -{" "}
            <span className="text-para tracking-wide font-normal">
              {movie?.overview}
            </span>
          </h2>
        </div>

        {/* <div className="mt-auto self-end ">
          <Link to={"/"}>
            <button className="px-5 py-[5px] bg-blue-800 text-white rounded-sm hover:bg-button duration-200">
              Back to Main Page
            </button>
          </Link>
        </div> */}

        <div className="mt-auto flex flex-row justify-between items-center">
          <Link
            to={
              "https://youtube.com/results?search_query=" +
              movie?.title +
              " trailer"
            }
            target="_blank"
            className="flex flex-row items-center gap-2 px-3 py-[5px] bg-button hover:bg-opacity-90 duration-200 text-primary w-fit rounded-sm"
          >
            <BsFillPlayCircleFill className="text-lg" />
            Watch Trailer
          </Link>

          <Link
            to={"https://channelmyanmar.org/?s=" + movie?.title}
            target="_blank"
            className="flex flex-row items-center gap-2 px-3 py-[5px] bg-button hover:bg-opacity-90 duration-200 text-primary w-fit rounded-sm"
          >
            <BsDownload className="text-lg" />
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
