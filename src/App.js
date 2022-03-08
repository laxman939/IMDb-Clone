import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponet from "./Components/Carousel/Carousel";
import ErrorPage from "./Components/ErrorPage";
import Favourites from "./Components/Favourites/Favourites";
import Trending from "./Components/Movies/Trending";
import NavBar from "./Components/Navigation/NavBar";
import Pagination from "./Components/Pagination/Pagination";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Success from "./Components/Success";
import "./styles.css";

function App() {
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
              <Pagination />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
