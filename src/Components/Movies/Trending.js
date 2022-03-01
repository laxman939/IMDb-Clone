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
    //To get from local Storage (Every time when page Reloads)
    let localFav = localStorage.getItem("imdb-clone");
    localFav = JSON.parse(localFav) || [];

    dispatch(getFavoriteMovie(localFav));

    // To get trending movies with api
    getMovies();
  }, [pageNmbr]);

  // Favourites -->Add
  const addFav = (movie) => {
    // To store in Redux store
    dispatch(getFavoriteMovie([...favList, movie])); //New movie with prev movies

    // To store in Local Storage also
    localStorage.setItem("imdb-clone", JSON.stringify(favList));
  };

  // Favourites -->Delete
  const deleteFav = (movie) => {
    let delFav = favList.filter((m) => m.id !== movie.id);

    dispatch(getFavoriteMovie([...delFav])); // To delete in redux store

    // To delete in Local Storage also
    localStorage.setItem("imdb-clone", JSON.stringify(delFav));
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
                  className={`text-base md:text-lg font-bold text-yellow-200
                    w-full bottom-0 bg-slate-800 border-b-2 border-gray-600
                    p-1 md:p-2
                    text-center font-mono
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
                    <span className="font-bold text-base text-orange-700">
                      <LikeOutlined />
                    </span>
                    <span className="text-yellow-600 font-mono">
                      {movie.vote_average}({movie.vote_count})
                    </span>
                  </div>
                  <div className="flex flex-column pt-2">
                    <span className="font-extrabold text-orange-700">
                      Release
                    </span>
                    <span className="text-yellow-600 font-mono">
                      {movie.release_date}
                    </span>
                  </div>
                  <div className="flex flex-column pt-2">
                    <span className="font-extrabold text-orange-700">Type</span>
                    <span className="text-yellow-600 font-mono">
                      {movie.media_type}({movie.original_language})
                    </span>
                  </div>
                  <div>
                    {hoverMovieId === movie.id && (
                      <>
                        {favList.find((m) => m.id === movie.id) ? (
                          <span
                            className={`text-xl text-red-900 hover:text-red-500 cursor-pointer`}
                            onClick={() => deleteFav(movie)}
                          >
                            <HeartFilled />
                          </span>
                        ) : (
                          <span
                            className={`text-xl text-pink-900 hover:text-red-500 cursor-pointer`}
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
