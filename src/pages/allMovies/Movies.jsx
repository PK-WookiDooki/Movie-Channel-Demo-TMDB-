import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../features/services/movieSlice";
import { getData } from "../../features/services/api";
import { Genres, Loading, MovieCard } from "../../components";

const Movies = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    let movies = [];
    for (let i = 1; i <= 4; i++) {
      const { results } = await getData(i);
      movies = [...movies, results].flat();
    }
    dispatch(addMovies(movies));
    setMovies(movies);
    setLoading(false);
  };

  const { genreFilter } = useSelector((state) => state.movies);

  // console.log(movies[0]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col lg:flex-row lg:gap-2 p-3 min-h-screen ">
        <div className="sticky top-[56px] py-5 lg:py-0 bg-primary lg:z-0 z-10">
          <Genres />
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-stretch scroll-smooth  self-start w-full mt-3 lg:mt-0">
          {genreFilter?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} className="card" />;
          })}
        </div>
      </div>
    );
  }
};

export default Movies;
