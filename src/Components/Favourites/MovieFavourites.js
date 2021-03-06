/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getFavouriteMovies } from "../../Redux/Actions/Actions";
import { movieGenreids } from "../../APIs/BaseApi";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

export default function MovieFavourites() {
  const [curGenre, setCurGenre] = useState("All Genres");
  const [genre, setGenre] = useState([]);

  const [rating, setRating] = useState(0);
  const [popularity, setPopularity] = useState(0);

  const favList = useSelector((state) => state.MovieFavourites.movieFavourites);

  const dispatch = useDispatch();

  //For buttons --> To make dynamic
  useEffect(() => {
    let tempGenre = favList.map((movie) => movieGenreids[movie.genre_ids[0]]);
    // To remove duplicates
    tempGenre = new Set(tempGenre);

    setGenre(["All Genres", ...tempGenre]);
  }, [favList]);

  // Favourites -->Delete
  const deleteFav = (movie) => {
    let unDelFav = favList.filter((m) => m.id !== movie.id);

    // To delete in redux store
    dispatch(getFavouriteMovies([...unDelFav]));

    // To delete in Local Storage also
    localStorage.setItem("favouritesMovie", JSON.stringify(unDelFav));
  };

  // Filtering
  let filterdMovies = [];
  filterdMovies =
    curGenre === "All Genres"
      ? favList
      : favList.filter(
          (movie) => movieGenreids[movie.genre_ids[0]] === curGenre
        );

  // Sorting in rating and popularity
  if (rating === 1) {
    filterdMovies = filterdMovies.sort(function (a, b) {
      return a.vote_average - b.vote_average;
    });
  } else if (rating === -1) {
    filterdMovies = filterdMovies.sort(function (a, b) {
      return b.vote_average - a.vote_average;
    });
  }

  if (popularity === 1) {
    filterdMovies = filterdMovies.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
  } else if (popularity === -1) {
    filterdMovies = filterdMovies.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
  }

  return (
    <div className="bg-white shadow-md min-h-screen">
      <div
        className={`bg-gray-300 p-2 rounded-b-lg
        flex flex-row flex-wrap justify-center`}
      >
        {genre.map((gen) => (
          <button
            key={gen.id}
            className={
              curGenre === gen
                ? `m-1 p-2 border-2 border-white rounded-xl
          md:text-base text-sm font-bold font-mono
          bg-yellow-900 text-white hover:bg-yellow-700`
                : `m-1 p-2 border-2 border-white rounded-xl
          md:text-base text-sm font-bold font-mono
          hover:bg-gray-500 hover:text-white`
            }
            onClick={() => setCurGenre(gen)}
          >
            {gen}
          </button>
        ))}
      </div>
      <div>
        <div className="flex flex-col">
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-2 border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        TITLE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-1 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex flex-row justify-left">
                          <div className="flex justify-center py-4 px-0">
                            <div className="p-0">RATING</div>
                            <div
                              className="flex column hover:text-red-800 cursor-pointer"
                              onClick={() => {
                                setRating(-1);
                                setPopularity(0);
                                rating === -1 && setRating(1);
                                setPopularity(0);
                              }}
                            >
                              <ArrowUpOutlined />
                              <ArrowDownOutlined />
                            </div>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-1 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex flex-row justify-left">
                          <div className="flex justify-center py-4 px-0">
                            <div className="pt-0">POPULARITY</div>
                            <div
                              className="flex flex column hover:text-red-800 cursor-pointer"
                              onClick={() => {
                                setPopularity(1);
                                setRating(0);
                                popularity === 1 && setPopularity(-1);
                                setRating(0);
                              }}
                            >
                              <ArrowUpOutlined />
                              <ArrowDownOutlined />
                            </div>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        GENRE
                      </th>
                      <th
                        scope="col"
                        className="pl-4 md:pl-2 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        REMOVE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filterdMovies.length !== 0 &&
                      filterdMovies.map((movie) => (
                        <tr key={movie.id}>
                          <td className="px-1 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                                <img
                                  className="hidden md:block md:h-[100px] md:w-[180px] object-fill rounded-lg
                                hover:brightness-120 hover:contrast-125"
                                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {movie.original_title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-12 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-sm leading-5 font-semibold text-gray-600">
                              {movie.vote_average}
                            </span>
                          </td>
                          <td className="px-8 pl-8 text-sm text-gray-600 font-semibold">
                            {movie.popularity}
                          </td>
                          <td className="pr-4 md:pr-8 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-yellow-600 hover:text-yellow-700">
                              {movieGenreids[movie.genre_ids[0]]}
                            </span>
                          </td>
                          <td className="px-2  py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              href="#"
                              className="px-3 md:pr-8 inline-flex text-sm leading-5 font-semibold rounded-full bg-red-100 text-red-800 hover:text-red-500"
                              onClick={() => deleteFav(movie)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {filterdMovies.length === 0 && (
                  <p className="flex justify-center text-center py-2 font-bold">
                    No Favourites
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
