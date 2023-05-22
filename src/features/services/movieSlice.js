import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  moviesList: [],
  detail: {},
  genreFilter: [],
  topRatedMovies: [],
  topRatedMoviesGenreFilter: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.moviesList = payload;
      state.genreFilter = payload;
      state.topRatedMovies = payload?.filter((mv) => mv.vote_average >= 7);
      state.topRatedMoviesGenreFilter = payload?.filter(
        (mv) => mv.vote_average >= 7
      );
    },

    movieDetail: (state, { payload }) => {
      state.detail = payload;
      Cookies.set("movie", JSON.stringify(state.detail));
    },

    setGenreFilter: (state, { payload }) => {
      state.genreFilter = payload;
      // if (payload) {
      //   Cookies.set("filteredMovies", JSON.stringify(state.genreFilter));
      // }
    },

    setTopRatedGenreFilter: (state, { payload }) => {
      state.topRatedMoviesGenreFilter = payload;
    },
  },
});

export const {
  addMovies,
  movieDetail,
  setGenreFilter,
  setTopRatedGenreFilter,
} = movieSlice.actions;

export default movieSlice.reducer;
