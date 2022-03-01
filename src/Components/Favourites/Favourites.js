/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getFavoriteMovie } from "../../Redux/Actions/Actions";
import { movieGenreids } from "../../APIs/BaseApi";

import { ArrowDownOutlined } from "@ant-design/icons";

//<UpCircleOutlined /> <DownCircleOutlined /> <ArrowUpOutlined /> <ArrowDownOutlined />

function Favourites() {
  const [curGenre, setCurGenre] = useState("All Genres");
  const [genre, setGenre] = useState([]);

  const favList = useSelector((state) => state.Favourites.favourites);

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
    let delFav = favList.filter((m) => m.id !== movie.id);

    // To delete in redux store
    dispatch(getFavoriteMovie([...delFav]));

    // To delete in Local Storage also
    localStorage.setItem("imdb-clone", JSON.stringify(delFav));
  };

  return (
    <div className="bg-white m-3 p-4 rounded-lg">
      <div
        className={`bg-gray-300 p-2 rounded-lg
        flex flex-row flex-wrap justify-center`}
      >
        {genre.map((gen) => (
          <button
            key={gen.id}
            className={
              curGenre === gen
                ? `mx-1 my-1 p-2 border-2 border-white rounded-xl
          text-base font-bold font-mono
          bg-yellow-900 text-white hover:bg-yellow-700`
                : `mx-1 my-1 p-2 border-2 border-white rounded-xl
          text-base font-bold font-mono
          hover:bg-gray-500 hover:text-white`
            }
            onClick={() => setCurGenre(gen)}
          >
            {gen}
          </button>
        ))}
      </div>
      <div className="flex justify-center p-4">
        <input
          type="text"
          placeholder="Search by Name"
          className="text-center border-1 p-2 rounded-xl border-gray-900"
        />
      </div>
      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                          <div
                            className="flex flex-column border-2 rounded font-bold px-1
                          cursor-pointer hover:bg-gray-400"
                          >
                            <span>H</span>
                            <span>
                              <ArrowDownOutlined />
                            </span>
                            <span>L</span>
                          </div>
                          <div className="py-4 px-1"> RATING</div>
                          <div
                            className="flex flex-column border-2 rounded font-bold px-1
                          cursor-pointer hover:bg-gray-400"
                          >
                            <span>L</span>
                            <span>
                              <ArrowDownOutlined />
                            </span>
                            <span>H</span>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        POPULARITY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        GENRE
                      </th>
                      <th
                        scope="col"
                        className="pl-4 md:pl-8 py-3 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                      >
                        REMOVE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {favList.map((movie) => (
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
                        <td className="px-8 text-sm text-gray-600 font-semibold">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
