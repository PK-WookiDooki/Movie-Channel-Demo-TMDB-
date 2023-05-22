import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenreFilter,
  setTopRatedGenreFilter,
} from "../../features/services/movieSlice";
import "./genre.css";

const Genres = () => {
  const [genreId, setGenreId] = useState(0);

  const { moviesList, topRatedMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genreId == 0) {
      dispatch(setGenreFilter(moviesList));
      dispatch(setTopRatedGenreFilter(topRatedMovies));
    } else {
      const filteredMovies = moviesList.filter((mv) =>
        mv.genre_ids.includes(genreId)
      );
      const topRatedFilteredMovies = moviesList.filter(
        (mv) => mv.genre_ids.includes(genreId) && mv.vote_average >= 7
      );
      dispatch(setGenreFilter(filteredMovies));
      dispatch(setTopRatedGenreFilter(topRatedFilteredMovies));
    }
  }, [genreId]);

  const genreIdHandler = (id) => {
    setGenreId(id);
  };

  return (
    <nav className="flex flex-row flex-wrap lg:flex-col justify-center items-center gap-3 lg:sticky top-20 lg:w-44">
      <h2 className="text-button text-lg hidden lg:block font-medium">
        Genres
      </h2>
      <button
        onClick={() => genreIdHandler(0)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 0 ? "active" : ""
        }`}
      >
        All
      </button>

      <button
        onClick={() => genreIdHandler(28)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 28 ? "active" : ""
        }`}
      >
        Action
      </button>

      <button
        onClick={() => genreIdHandler(12)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 12 ? "active" : ""
        }`}
      >
        Adventure
      </button>

      <button
        onClick={() => genreIdHandler(80)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 80 ? "active" : ""
        }`}
      >
        Crime
      </button>

      <button
        onClick={() => genreIdHandler(18)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 18 ? "active" : ""
        }`}
      >
        Drama
      </button>

      <button
        onClick={() => genreIdHandler(36)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 36 ? "active" : ""
        }`}
      >
        History
      </button>

      <button
        onClick={() => genreIdHandler(27)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 27 ? "active" : ""
        }`}
      >
        Horror
      </button>

      <button
        onClick={() => genreIdHandler(10749)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 10749 ? "active" : ""
        }`}
      >
        Romance
      </button>

      <button
        onClick={() => genreIdHandler(53)}
        className={`py-[5px] w-32 hover:bg-text rounded-sm genre_btn bg-button text-primary duration-200 ${
          genreId === 53 ? "active" : ""
        }`}
      >
        Thriller
      </button>
    </nav>
  );
};

export default Genres;
