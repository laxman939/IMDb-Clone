import React, { useEffect, useState } from "react";

import BaseApi from "../../APIs/BaseApi";
import { API_KEY } from "../../APIs/BaseApi";

import { Carousel } from "react-bootstrap";

function CarouselComponet() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await BaseApi.get(
      `/3/trending/movie/week?api_key=${API_KEY}&page=1`
    );

    setMovies(response.data.results);
    // console.table("Action " + response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Carousel
        fade
        interval="3000"
        className="flex py-12 px-2 md:px-4 bg-gray-600"
      >
        {movies.map((m) => {
          return (
            <Carousel.Item className="flex items-end" key={m.id}>
              <img
                className={`d-block w-100 h-[50vh] md:h-[90vh] 
                object-fill rounded-lg hover:brightness-120 hover:contrast-125`}
                src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`}
                alt="slide"
              />
              <Carousel.Caption
                className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
              >
                {m.original_title}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        <Carousel.Item>
          <img
            className="d-block w-100 h-[50vh] md:h-[90vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://www.pixel4k.com/wp-content/uploads/2021/03/the-moon-knight-4k_1615207226.jpg"
            alt="Second slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-2 md:p-4
                bg-gray-900 bg-opacity-50  
                `}
          >
            Moon Knight
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[50vh] md:h-[90vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://swall.teahub.io/photos/small/279-2798830_12-angry-men.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-2 md:p-4
                bg-gray-900 bg-opacity-50  
                `}
          >
            12 Angry Men
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[50vh] md:h-[90vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://gumlet.assettype.com/swarajya%2F2021-11%2F9dfb808a-4d4d-4e86-adaa-aa7abf1fdd0e%2FMV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5__V1_FMjpg_UX1000_.jpg?q=75&auto=format%2Ccompress&w=1200"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            Jai Bhim
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[50vh] md:h-[90vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://wallpaperaccess.com/full/1698627.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            Ford v Ferrari
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[50vh] md:h-[90vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://w0.peakpx.com/wallpaper/557/513/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            The Godfather
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselComponet;
