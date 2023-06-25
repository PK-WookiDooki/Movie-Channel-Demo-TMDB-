import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsDownload } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Cookie } from "@mui/icons-material";

const MovieDetail = () => {
  const movie = Cookies.get("movie") ? JSON.parse(Cookies.get("movie")) : null;
  // console.log(movie);

  const [casts, setCasts] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    getCasts();
    getYTKey();
  }, []);

  const getCasts = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=4066b11ad50ffb347b51dfb90e37e3dd`
    );
    const data = await res.json();
    setCasts(data?.cast);
  };

  const getYTKey = async () => {
    const res = await fetch(
      `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=4066b11ad50ffb347b51dfb90e37e3dd`
    );
    const { results } = await res.json();
    console.log(results);
    const officialTrailer = results?.find(
      (mv) =>
        mv.name === "Official Trailer" ||
        mv.name === `${movie.title} Official Trailer`
    );
    setKey(officialTrailer?.key);
  };

  // https://api.themoviedb.org/3/movie/movie_id/credits
  // console.log(casts);

  console.log(key);

  return (
    <section>
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
        <div className="w-full flex flex-col gap-2 md:h-64">
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

          <div className="mt-auto flex flex-row justify-end items-center">
            {/* <Link
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
            </Link> */}

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

      <div className="mt-5">
        <div className="aspect-video w-full md:max-w-md">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${key}`}
            title={movie.title}
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mt-2"> Full Casts </h2>
          <div className=" flex gap-2 overflow-x-scroll" draggable={true}>
            {casts?.map((cast) => {
              return cast.profile_path ? (
                <div key={cast.id} className="max-w-[160px]">
                  <img
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt=""
                    className=" min-w-[160px] "
                  />
                  <h2 className="text-center font-medium"> {cast.name} </h2>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
