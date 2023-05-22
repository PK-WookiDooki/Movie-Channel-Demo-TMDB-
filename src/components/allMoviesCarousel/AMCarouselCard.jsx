import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieDetail } from "../../features/services/movieSlice";

const AMCarouselCard = ({ movie }) => {
  const dispatch = useDispatch();

  const setDetailData = () => {
    dispatch(movieDetail(movie));
  };

  return (
    <div className="card flex flex-col w-[160px] shadow group hover:shadow-lg duration-200 scroll-smooth overflow-hidden bg-primary">
      <div className="relative overflow-hidden">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
          alt=""
          className="w-full object-contain mx-auto group-hover:scale-[1.2] duration-200 p-1"
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
    </div>
  );
};

export default AMCarouselCard;
