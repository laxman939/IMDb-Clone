/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

//Redux
import { getFavouriteMovies } from "../../Redux/Actions/Actions";

//Spinner
import { SpinnerCircular } from "spinners-react";

// antd
import { LikeOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function Movies({ search }) {
  const [hoverMovieId, setHoverMovieId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Movies from Redux
  let trendingMovies = useSelector((state) => state.TrendMovies.trendMovies);
  // userName
  const userName = useSelector((state) => state.UserName.userName);
  // Favourites from redux
  const favList = useSelector((state) => state.MovieFavourites.movieFavourites);

  useEffect(() => {
    //To get from local Storage (Every time when page Reloads)
    let localFav = localStorage.getItem("favouritesMovie");
    localFav = JSON.parse(localFav) || [];

    dispatch(getFavouriteMovies(localFav));
  }, []);

  // Favourites --> Add
  const addFav = (movie) => {
    // To store in Redux store
    dispatch(getFavouriteMovies([...favList, movie])); //New movie with prev movies

    // To store in Local Storage also
    localStorage.setItem("favouritesMovie", JSON.stringify(favList));
  };

  // Favourites -->Delete
  const deleteFav = (movie) => {
    let unDelFav = favList.filter((m) => m.id !== movie.id);

    // To delete in redux store
    dispatch(getFavouriteMovies([...unDelFav]));

    // To delete in Local Storage also
    localStorage.setItem("favouritesMovie", JSON.stringify(unDelFav));
  };

  // searching
  if (search.length > 1) {
    trendingMovies = trendingMovies.filter(
      (movie) =>
        trendingMovies.length !== 0 &&
        movie.original_title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
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

      <motion.div className="flex flex-wrap md:justify-between justify-center p-2 m-2">
        {trendingMovies.length !== 0 &&
          trendingMovies.map((movie) => (
            <div
              layout="true"
              className={`flex flex-column
                  md:h-[52vh] md:w-[320px] h-[38vh] w-[250px]
                  rounded-xl 
                  md:px-4 md:m-3 mb-4 px-0 
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
                          onClick={() =>
                            userName !== ""
                              ? deleteFav(movie)
                              : navigate("signin")
                          }
                        >
                          <HeartFilled />
                        </span>
                      ) : (
                        <span
                          className={`text-xl text-pink-900 hover:text-red-500 cursor-pointer`}
                          onClick={() =>
                            userName !== "" ? addFav(movie) : navigate("signin")
                          }
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
      </motion.div>
    </div>
  );
}
