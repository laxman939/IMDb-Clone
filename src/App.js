import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponet from "./Components/Carousel/Carousel";
import Favourites from "./Components/Favourites/Favourites";
import Trending from "./Components/Movies/Trending";
import NavBar from "./Components/Navigation/NavBar";
import Pagination from "./Components/Pagination/Pagination";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
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
              <CarouselComponet />
              <Trending />
              <Pagination />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      n
    </BrowserRouter>
  );
}

export default App;
