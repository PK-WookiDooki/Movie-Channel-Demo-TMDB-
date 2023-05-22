import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {  Login, Register } from "./pages";
import { RGMain } from "./components";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className=" w-[85%] mx-auto mb-5">
      <Routes>
        <Route
          path="*"
          element={
            <RGMain>
              <MainPage />
            </RGMain>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
