import React from "react";
import { CP, Navbar, RGuard } from "../components";
import { Route, Routes } from "react-router-dom";
import Movies from "./allMovies/Movies";
import TopRated from "./topRated/TopRated";
import { Detail, Home, InvalidRoute, SMovies } from ".";

const MainPage = () => {
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all_movies" element={<Movies />}></Route>
        <Route path="/top_rated" element={<TopRated />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route
          path="/search"
          element={
            <RGuard>
              <SMovies />
            </RGuard>
          }
        ></Route>
        <Route path="change_password" element={<CP />}></Route>
        <Route path="*" element={<InvalidRoute />}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;
