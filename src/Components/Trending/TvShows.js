/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

//Redux
import { getFavouriteTvShows } from "../../Redux/Actions/Actions";

// antd
import { LikeOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function TvShows({ search }) {
  const [hoverMovieId, setHoverMovieId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Movies from Redux
  let trendingTv = useSelector((state) => state.TrendTv.trendTv);
  // userName
  const userName = useSelector((state) => state.UserName.userName);
  // Favourites from redux
  const favList = useSelector((state) => state.TvFavourites.tvFavourites);

  useEffect(() => {
    //To get from local Storage (Every time when page Reloads)
    let localFav = localStorage.getItem("favouritesTv");
    localFav = JSON.parse(localFav) || [];

    dispatch(getFavouriteTvShows(localFav));
  }, []);

  // Favourites --> Add
  const addFav = (tv) => {
    // To store in Redux store
    dispatch(getFavouriteTvShows([...favList, tv])); //New movie with prev movies

    // To store in Local Storage also
    localStorage.setItem("favouritesTv", JSON.stringify(favList));
  };

  // Favourites -->Delete
  const deleteFav = (movie) => {
    let unDelFav = favList.filter((m) => m.id !== movie.id);

    // To delete in redux store
    dispatch(getFavouriteTvShows([...unDelFav]));

    // To delete in Local Storage also
    localStorage.setItem("favouritesTv", JSON.stringify(unDelFav));
  };

  // searching
  if (search.length > 1) {
    trendingTv = trendingTv.filter(
      (tv) =>
        trendingTv.length !== 0 &&
        tv.original_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-around p-3 md:m-2 m-1">
        {trendingTv.length !== 0 ? (
          trendingTv.map((tv) => (
            <motion.div
              layout="true"
              className={`flex flex-column
              md:h-[52vh] md:w-[320px] h-[26vh] w-[252px]
                  rounded-xl 
                  md:px-4 md:mb-4 mb-16 sm:mb-4 py-2 px-0 
                  hover:scale-105 ease-out duration-300
                `}
              key={tv.id}
              onMouseEnter={() => setHoverMovieId(tv.id)}
              onMouseLeave={() => setHoverMovieId("")}
            >
              <img
                className={`
                    object-fill rounded-t-lg 
                    hover:brightness-120 hover:contrast-125
                    `}
                src={`https://image.tmdb.org/t/p/w400${tv.backdrop_path}`}
                alt="posters"
              />

              <div
                className={`text-base md:text-lg font-bold text-yellow-200
                    w-full bottom-0 bg-slate-800 border-b-2 border-gray-600
                    p-1 md:p-2
                    text-center font-mono
                    `}
              >
                {tv.original_name}
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
                    {tv.vote_average}({tv.vote_count})
                  </span>
                </div>
                <div className="flex flex-column pt-2">
                  <span className="font-extrabold text-orange-700">
                    Release
                  </span>
                  <span className="text-yellow-600 font-mono">
                    {tv.first_air_date}
                  </span>
                </div>
                <div className="flex flex-column pt-2">
                  <span className="font-extrabold text-orange-700">Type</span>
                  <span className="text-yellow-600 font-mono">
                    {tv.media_type}({tv.original_language})
                  </span>
                </div>
                <div>
                  {hoverMovieId === tv.id && (
                    <>
                      {favList.find((m) => m.id === tv.id) ? (
                        <span
                          className={`text-xl text-red-900 hover:text-red-500 cursor-pointer`}
                          onClick={() =>
                            userName !== "" ? deleteFav(tv) : navigate("signin")
                          }
                        >
                          <HeartFilled />
                        </span>
                      ) : (
                        <span
                          className={`text-xl text-pink-900 hover:text-red-500 cursor-pointer`}
                          onClick={() =>
                            userName !== "" ? addFav(tv) : navigate("signin")
                          }
                        >
                          <HeartOutlined />
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <h3>No Result found</h3>
        )}
      </div>
    </div>
  );
}
// {trendingTv.length === 0 && (
//   <div className="cursor-progress flex justify-center">
//     <SpinnerCircular
//       size="100"
//       thickness="80"
//       color="green"
//       secondaryColor="brown"
//       speed="150"
//     />
//   </div>
// )}
