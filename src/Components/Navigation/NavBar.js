import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

function NavBar() {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);

    setSearch(e.target.value);
    console.log("Navigation " + search);
  };

  return (
    <div
      className="border-2 border-red-700
    md:pl-8 pl-2 py-3 md:space-x-8  space-x-4
     flex  items-center justify-between bg-gray-900"
    >
      <NavLink
        to="/"
        className="text-xl md:text-2xl px-2 py-1 text-gray-800 no-underline font-extrabold font-sans
         rounded bg-amber-400 "
      >
        <span className="hover:text-green-900"> IMDb</span>
      </NavLink>
      <div className="flex flex-row md:space-x-9 space-x-4 md:pr-12 pr-4">
        <div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchOutlined style={{ fontSize: "16px", color: "black" }} />
            </span>

            <input
              className="placeholder:italic placeholder:text-slate-700 block bg-white w-[22vw]  rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>

        <div>
          <NavLink
            to="/"
            className="font-medium no-underline text-white text-base md:text-xl rounded
            hover:border-2 hover:border-dotted hover:bg-yellow-900"
          >
            Movies
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/favourites"
            className="font-medium no-underline text-base text-white md:text-xl rounded
            hover:border-2 hover:border-dotted hover:bg-yellow-900"
          >
            Favorites
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/signin"
            className="font-medium no-underline text-base text-white md:text-xl rounded
            hover:border-2 hover:border-dotted hover:bg-yellow-900"
          >
            SignIn
          </NavLink>
          {/* <NavLink
            to="/signup"
            className="font-medium no-underline text-base text-white md:text-xl rounded
            hover:border-2 hover:border-dotted hover:bg-yellow-900"
          >
            Sign Up
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
