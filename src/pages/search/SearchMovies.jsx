import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieCard } from "../../components";
const SearchMovies = () => {
  const location = useLocation();
  const { searchedMovies } = location?.state;

  if (searchedMovies.length != 0) {
    return (
      <div className="flex flex-row flex-wrap gap-5 justify-center items-stretch p-3 border scroll-smooth">
        {searchedMovies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-56 shadow border hover:shadow-md rounded-sm">
        <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
          <h2 className="text-2xl text-blue-800 font-bold">
            Movies Not Found!
          </h2>

          <Link to={"/"}>
            <button className="text-white bg-blue-800 px-5 py-[5px] rounded-sm hover:bg-blue-600 duration-200">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default SearchMovies;
