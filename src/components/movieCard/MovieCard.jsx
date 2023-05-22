import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { movieDetail } from "../../features/services/movieSlice";

const MovieCard = ({ movie }) => {
  useEffect(() => {
    ScrollReveal().reveal(".card", {
      delay: 300,
      duration: 1000,
      distance: "60px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  }, []);

  const dispatch = useDispatch();

  const setDetailData = () => {
    dispatch(movieDetail(movie));
  };

  return (
    <div className="card flex flex-col w-[170px] shadow group hover:shadow-lg duration-200 scroll-smooth overflow-hidden rounded bg-primary">
      <div className="relative overflow-hidden">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
          alt=""
          className="w-full object-contain mx-auto group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 scale-0 group-hover:scale-100 w-full h-full bg-text bg-opacity-60 flex items-center justify-center duration-300">
          <Link
            to={`/detail/${movie.id}`}
            className=" px-5 py-[5px] bg-detail text-primary rounded-sm hover:bg-opacity-90 duration-200"
          >
            <button onClick={setDetailData}>Detail</button>
          </Link>
        </div>
      </div>
      <div className="my-auto p-2">
        <h2 className="text-center text-blue-800 truncate"> {movie?.title} </h2>
      </div>
    </div>
  );
};

export default MovieCard;
