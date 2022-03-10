import React, { useEffect, useState } from "react";

import BaseApi from "../../APIs/BaseApi";

import { Carousel } from "react-bootstrap";

function CarouselComponet() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await BaseApi.get(
      `/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );

    setMovies(response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Carousel
        fade
        interval="2500"
        className="carousel-section flex py-3 px-2 md:px-4 bg-gray-600"
      >
        {movies.map((m) => {
          return (
            <Carousel.Item className="flex items-end" key={m.id}>
              <img
                className={`d-block w-100 h-[30vh] md:h-[85vh] 
                object-fill rounded-lg hover:brightness-120 hover:contrast-125`}
                src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`}
                alt="slide"
              />
              <Carousel.Caption
                className={`text-xl md:text-3xl font-extrabold
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  text-yellow-200
                `}
              >
                <span className="text-yellow-200 font-mono">
                  {m.original_title || m.original_name}
                </span>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        <Carousel.Item>
          <img
            className="d-block w-100 h-[30vh] md:h-[85vh]  object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://www.pixel4k.com/wp-content/uploads/2021/03/the-moon-knight-4k_1615207226.jpg"
            alt="Second slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold text-yellow-200
                w-full bottom-0 rounded-b-xl p-2 md:p-4
                bg-gray-900 bg-opacity-50  
                `}
          >
            <span className="text-yellow-200 font-mono">Moon Knight</span>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[30vh] md:h-[85vh]  object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://swall.teahub.io/photos/small/279-2798830_12-angry-men.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold text-yellow-200
                w-full bottom-0 rounded-b-xl p-2 md:p-4
                bg-gray-900 bg-opacity-50  
                `}
          >
            <span className="text-yellow-200 font-mono">12 Angry Men</span>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[30vh] md:h-[85vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://gumlet.assettype.com/swarajya%2F2021-11%2F9dfb808a-4d4d-4e86-adaa-aa7abf1fdd0e%2FMV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5__V1_FMjpg_UX1000_.jpg?q=75&auto=format%2Ccompress&w=1200"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold text-yellow-200
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            <span className="text-yellow-200 font-mono">Jai Bhim</span>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[30vh] md:h-[85vh] object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://wallpaperaccess.com/full/1698627.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold text-yellow-200
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            <span className="text-yellow-200 font-mono">Ford v Ferrari</span>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="flex items-end">
          <img
            className="d-block w-100 h-[30vh] md:h-[85vh]   object-fill rounded-lg hover:brightness-120 hover:contrast-125"
            src="https://w0.peakpx.com/wallpaper/557/513/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-xl md:text-3xl font-bold text-yellow-200
                w-full bottom-0 rounded-b-xl p-3
                bg-gray-900 bg-opacity-50  
                `}
          >
            <span className="text-yellow-200 font-mono">The Godfather</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselComponet;
