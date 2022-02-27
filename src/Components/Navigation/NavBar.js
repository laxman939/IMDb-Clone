import React from "react";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="border-2 border-red-500
    pl-8 py-3 space-x-8
     flex  items-center justify-between bg-slate-500"
    >
      <NavLink
        to="/"
        className="text-2xl md:text-3xl text-red-900 no-underline font-extrabold"
      >
        IMDb
      </NavLink>
      <div className="flex flex-row space-x-8 pr-12">
        <NavLink
          to="/"
          className="font-medium no-underline text-red-900 text-lg md:text-xl"
        >
          Movies
        </NavLink>
        <NavLink
          to="/favourites"
          className="font-medium no-underline text-lg text-red-900 md:text-xl"
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
