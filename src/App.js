import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import CarouselComponet from "./Components/Carousel/Carousel";
import ErrorPage from "./Components/ErrorPage";
import Trending from "./Components/Trending";
import NavBar from "./Components/Navigation/NavBar";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

import "./styles.css";
import AllFavourites from "./Components/Favourites";
import Profile from "./Components/Profile/Profile";
import Pages from "./Components/Pagination/Pagination";
import Success from "./Components/Profile/Success";

export default function App() {
  let isSignin = useSelector((state) => state.IsSignIn.isSignIn);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselComponet />
              <Trending />
              <Pages />
            </>
          }
        />
        {isSignin === true ? (
          <Route path="/favourites" element={<AllFavourites />} />
        ) : (
          <Route path="/favourites" element={<Navigate to="/signup" />} />
        )}

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {isSignin === true ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="*" element={<ErrorPage />} />
        )}

        {isSignin === true && <Route path="/success" element={<Success />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
