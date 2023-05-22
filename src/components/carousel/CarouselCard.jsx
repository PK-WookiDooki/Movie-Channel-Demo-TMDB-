import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsDownload } from "react-icons/bs";

const CarouselCard = ({ movie }) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-3 items-center justify-center h-full ">
      <div className="w-full lg:w-[70%] relative">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
          alt=""
        />
      </div>
      <div className="w-full flex-col h-64 lg:h-auto hidden md:hidden lg:flex px-3">
        <h2 className="text-xl font-bold text-text">
          {" "}
          Title - <span className="">{movie?.title}</span>{" "}
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

        <div className="mt-3 flex flex-row justify-between items-center">
          <Link
            to={
              "https://youtube.com/results?search_query=" +
              movie?.title +
              " trailer"
            }
            target="_blank"
            className="flex flex-row items-center gap-2 px-3 py-[5px] bg-button text-primary duration-200 hover:bg-opacity-[85%] w-fit rounded-sm"
          >
            <BsFillPlayCircleFill className="text-lg" />
            Watch Trailer
          </Link>

          <Link
            to={"https://channelmyanmar.org/?s=" + movie?.title}
            target="_blank"
            className="flex flex-row items-center gap-2 px-3 py-[5px] bg-button text-primary duration-200 hover:bg-opacity-[85%] w-fit rounded-sm"
          >
            <BsDownload className="text-lg" />
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
