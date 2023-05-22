import React from "react";
import { useSelector } from "react-redux";
import { Genres, Loading, MovieCard } from "../../components";

const TopRated = () => {
  const { topRatedMoviesGenreFilter } = useSelector((state) => state.movies);

  // console.log(topRatedMoviesGenreFilter);

  if (topRatedMoviesGenreFilter.length == 0) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col lg:flex-row lg:gap-2 p-3 border">
        <div className="sticky top-[56px] py-5 lg:py-0 bg-primary lg:z-0 z-10">
          <Genres />
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-stretch scroll-smooth  self-start w-full mt-3 lg:mt-0">
          {topRatedMoviesGenreFilter?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
};

export default TopRated;
