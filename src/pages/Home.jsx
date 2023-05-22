import React, { useEffect, useState } from "react";
import { AMCarousel, Contact, Loading, MyCarousel } from "../components";
import { getData } from "../features/services/api";

const Home = () => {
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
    setMovies(movies);
    setLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="">
        <MyCarousel movies={movies} />
        <AMCarousel movies={movies} />
        <Contact />
      </div>
    );
  }
};

export default Home;
