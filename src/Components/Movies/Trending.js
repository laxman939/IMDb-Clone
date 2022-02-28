/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Movies Tv All

//Redux
import {
  getTrendingMovies,
  getFavoriteMovie,
} from "../../Redux/Actions/Actions";

//Spinner
import { SpinnerCircular } from "spinners-react";

// antd
import { LikeOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

// API
import BaseApi from "../../APIs/BaseApi";
import { API_KEY } from "../../APIs/BaseApi";

function Trending() {
  // Pagination
  let pageNmbr = useSelector((state) => state.Page.page);
  // Movies from Redux
  const trendingMovies = useSelector((state) => state.TrendMovies.trendMovies);
  // Favorites from redux
  const favList = useSelector((state) => state.Favourites.favourites);

  const [hoverMovieId, setHoverMovieId] = useState();

  const dispatch = useDispatch();

  // Get movies
  async function getMovies() {
    const response = await BaseApi.get(
      `/3/trending/movie/week?api_key=${API_KEY}&page=${pageNmbr}`
    );

    dispatch(getTrendingMovies(response.data.results));
    // console.table("Action " + response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, [pageNmbr]);

  //Favourites
  const addFav = (movie) => {
    dispatch(getFavoriteMovie([...favList, movie])); //New movie with prev movies

    // console.log("Favourites " + favList);
  };

  return (
    <>
      <div className="mb-8 mt-2 bg-gray-600">
        <div className="mb-3 pl-6 md:pl-12 font-extrabold text-xl md:text-2xl text-left text-yellow-500 hover:text-yellow-300">
          Trending Movies
        </div>

        {trendingMovies.length === 0 && (
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

        <div className="flex flex-wrap justify-between p-2 m-6">
          {trendingMovies.length !== 0 &&
            trendingMovies.map((movie) => (
              <div
                className={`flex flex-column
                  md:h-[50vh] md:w-[320px] h-[38vh] w-[250px]
                  rounded-xl 
                  md:px-4 md:m-2 mb-4 px-0 
                  hover:scale-105 ease-out duration-300
                `}
                key={movie.id}
                onMouseEnter={() => setHoverMovieId(movie.id)}
                onMouseLeave={() => setHoverMovieId("")}
              >
                <img
                  className={`
                    object-fill rounded-t-lg 
                    hover:brightness-120 hover:contrast-125
                    `}
                  src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                  alt="posters"
                />
                <div
                  className={`text-base md:text-lg font-bold text-white
                    w-full bottom-0 bg-slate-800 border-b-2 border-gray-600
                    p-1 md:p-2
                    text-center
                    `}
                >
                  {movie.original_title}
                </div>
                <div
                  className={`text-xs md:text-sm text-white
                    w-full bottom-0 bg-gray-800  
                    rounded-b-xl p-1 md:p-2
                    text-center 
                    flex justify-around
                    `}
                >
                  <div className="flex flex-column pb-2">
                    <span className="font-bold text-base">
                      <LikeOutlined />
                    </span>
                    {movie.vote_average}({movie.vote_count})
                  </div>
                  <div className="flex flex-column">
                    <span className="font-bold">Release</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="flex flex-column">
                    <span className="font-bold">Type</span>
                    <span>
                      {movie.media_type}({movie.original_language})
                    </span>
                  </div>
                  <div>
                    {hoverMovieId === movie.id && (
                      <>
                        {favList.find((m) => m.id === movie.id) ? (
                          <span
                            className={`text-xl text-red-900 hover:text-red-600 cursor-pointer`}
                            onClick={() => console.log("Removed")}
                          >
                            <HeartFilled />
                          </span>
                        ) : (
                          <span
                            className={`text-xl text-pink-800 hover:text-red-500 cursor-pointer`}
                            onClick={() => addFav(movie)}
                          >
                            <HeartOutlined />
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Trending;
