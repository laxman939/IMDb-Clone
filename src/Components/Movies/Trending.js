/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { getTrendingAction } from "../../Redux/Actions/Actions";

//Spinner
import { SpinnerCircular } from "spinners-react";

// API
import BaseApi from "../../APIs/BaseApi";
import { API_KEY } from "../../APIs/BaseApi";

function Trending() {
  let pageNmbr = useSelector((state) => state.Page.page);
  const trendingMovies = useSelector((state) => state.Trending.trending);

  const dispatch = useDispatch();

  async function getMovies() {
    const response = await BaseApi.get(
      `/3/trending/movie/week?api_key=${API_KEY}&page=${pageNmbr}`
    );

    dispatch(getTrendingAction(response.data.results));
    // console.table("Action " + response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, [pageNmbr]);

  return (
    <>
      <div className="mb-8 mt-2 bg-gray-600">
        <div className="mb-3 pl-6 md:pl-12 font-extrabold text-xl md:text-2xl text-left text-yellow-500 hover:text-yellow-300">
          Trending Movies
        </div>

        <div className="flex flex-wrap px-2 md:px-8 justify-around">
          {trendingMovies.length === 0 ? (
            <div className="flex space-x-20">
              <SpinnerCircular
                size="100"
                thickness="80"
                color="green"
                secondaryColor="brown"
                speed="150"
              />
              <SpinnerCircular
                size="100"
                thickness="80"
                color="green"
                secondaryColor="brown"
                speed="150"
              />
              <SpinnerCircular
                size="100"
                thickness="80"
                color="green"
                secondaryColor="brown"
                speed="150"
              />
            </div>
          ) : (
            trendingMovies.map((movie) => {
              return (
                <div
                  className={`
                      bg-[url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})] 
                      md:h-[38vh] md:w-[340px]
                      h-[26vh] w-[200px]
                      bg-contain rounded-xl
                      flex items-end mb-8 mt-2
                      hover:scale-110 ease-out duration-300
                      relative `}
                >
                  <div className="w-full bg-gray-900 text-white p-2 font-bold text-center rounded-b-xl md:p-2">
                    {movie.original_title}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Trending;
