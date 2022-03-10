import React, { useState } from "react";
import MovieFavourites from "./MovieFavourites";
import TvFavourites from "./TvFavourites";

export default function AllFavourites() {
  const [type, setType] = useState("");
  const [curType, setCurType] = useState("movie");

  function handleSetType(e) {
    setType(e.target.name);

    if (type === "tv") {
      setCurType("tv");
    } else if (type === "movie") {
      setCurType("movie");
    }
  }

  return (
    <div>
      <div className="space-x-16 rounded-t-lg mt-8 p-2 px-4 bg-neutral-600 text-yellow-500 text-lg flex flex-row">
        <button
          className={
            curType === "movie"
              ? `border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700 rounded-xl px-1 cursor-pointer`
              : `border-2 border-amber-700 hover:text-orange-600 bg-neutral-900 rounded-xl px-1 cursor-pointer`
          }
          name="movie"
          onClick={handleSetType}
        >
          Movies
        </button>
        <button
          className={
            curType === "tv"
              ? `border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700 rounded-xl px-1 cursor-pointer`
              : `border-2 border-amber-700 hover:text-orange-600 bg-neutral-900 rounded-xl px-1 cursor-pointer`
          }
          name="tv"
          onClick={handleSetType}
        >
          Tv Shows
        </button>
      </div>
      {type === "movie" ? <MovieFavourites /> : <TvFavourites />}
    </div>
  );
}
