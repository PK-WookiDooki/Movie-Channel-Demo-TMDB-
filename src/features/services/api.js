import axios from "axios";

export const getData = async (page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=b4b69e08e8922acb89acdb360879b601&language=en-US&page=${page}`
  );
  return data;
};
