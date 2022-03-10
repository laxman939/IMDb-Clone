import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import CarouselComponet from "./Components/Carousel/Carousel";
import ErrorPage from "./Components/ErrorPage";
// import SearchTrending from "./Components/Movies/SearchTrending";
import Trending from "./Components/Trending";
import NavBar from "./Components/Navigation/NavBar";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

import "./styles.css";
import AllFavourites from "./Components/Favourites";
import Profile from "./Components/Profile/Profile";
import Pages from "./Components/Pagination/Pagination";

export default function App() {
  let isSignin = useSelector((state) => state.IsSignIn.isSignIn);
  const userName = useSelector((state) => state.UserName.userName);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <CarouselComponet /> */}
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
        {userName !== "" && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
