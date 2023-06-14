/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { getTrendingMovies, getTrendingTv } from "../../Redux/Actions/Actions";

//Spinner
import { SpinnerCircular } from "spinners-react";

// antd
import { SearchOutlined } from "@ant-design/icons";

// API
import BaseApi from "../../APIs/BaseApi";
import Movies from "./Movies";
import TvShows from "./TvShows";

export default function Trending() {
  // Pagination
  let pageNmbr = useSelector((state) => state.Page.page);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [curType, setCurType] = useState("movie");

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getTvShows();
  }, [search, pageNmbr]);

  // Get movies
  async function getMovies() {
    const response = await BaseApi.get(
      `/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNmbr}`
    );

    // To get trending movies with api
    dispatch(getTrendingMovies(response.data.results));
  }

  // Get Tv Shows
  async function getTvShows() {
    const response = await BaseApi.get(
      `/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNmbr}`
    );

    dispatch(getTrendingTv(response.data.results));
  }

  return (
    <>
      <div className="trending-section mb-2 ">
        <div className="mr-2 pl-4 md:px-4 font-extrabold text-lg md:text-2xl text-left text-orange-800 hover:text-yellow-900">
          Trending
          <div
            className="space-x-4 md:space-x-8 rounded-lg p-1 bg-neutral-600 text-yellow-500 text-lg md:text-xl
           flex flex-row md:justify-between justify-around font-bold"
          >
            <button
              className={
                curType === "movie"
                  ? `flex flex-nowrap pt-1  border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700 bg-gray-800 rounded-xl py-0 px-1 cursor-pointer`
                  : `flex flex-nowrap  pt-1 border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700  rounded-xl py-0 px-1 cursor-pointer`
              }
              name="movie"
              onClick={() => {
                setCurType("movie");
              }}
            >
              Movies
            </button>
            <button
              className={
                curType === "tv"
                  ? `flex flex-nowrap pt-1 border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700 bg-gray-800 rounded-xl pb-0 px-1 cursor-pointer`
                  : `flex flex-nowrap pt-1 border-2 border-amber-700 hover:text-orange-600 hover:bg-neutral-700  rounded-xl pb-0 px-1 cursor-pointer`
              }
              name="tv"
              onClick={() => {
                setCurType("tv");
              }}
            >
              Tv Shows
            </button>
            <div className="align-center">
              <label className="relative flex justify-center p-1">
                <span className="absolute md:inset-y-4 inset-y-3 left-0 flex text-bottom pl-2">
                  <SearchOutlined
                    style={{
                      fontSize: "16px",
                      color: "black",
                      textAlign: "center",
                    }}
                  />
                </span>

                <input
                  className="placeholder:italic placeholder:text-slate-700 bg-white w-[28vw]  
                  rounded-md py-1 pl-8 pr-3
                  shadow-sm border-2 text-sm md:text-lg"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        {curType === "movie" ? (
          <Movies search={search} />
        ) : curType === "tv" ? (
          <TvShows search={search} />
        ) : (
          <div className="cursor-progress flex justify-center">
            <SpinnerCircular
              size="100"
              thickness="80"
              color="green"
              secondaryColor="brown"
              speed="150"
            />
          </div>
        )}
      </div>
    </>
  );
}
