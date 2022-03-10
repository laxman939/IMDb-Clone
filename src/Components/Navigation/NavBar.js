import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

import { useDispatch } from "react-redux";
import { signInClick } from "../../Redux/Actions/Actions";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [curLink, setCurLink] = useState("");

  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item>
        <button
          type="submit"
          className="p-1 w-[7vw] text-yellow-900 hover:text-yellow-300
           border-red-600 rounded border hover:bg-gray-600"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </Menu.Item>
      <Menu.Item>
        <button
          type="submit"
          className="p-1 w-[7vw] text-yellow-900 hover:text-yellow-300
           border-red-600 rounded border hover:bg-gray-600"
          onClick={() => {
            dispatcher(signInClick(false));
            navigate("/");
          }}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  // function handleLogout() {

  // }

  return (
    <div
      className="border-2 border-red-700 static
    md:px-6 px-2 py-3 md:space-x-6  space-x-4
     flex  items-center justify-between bg-gray-900"
    >
      <NavLink
        to="/"
        className="text-xl md:text-2xl px-2 py-1 text-gray-800 no-underline font-extrabold font-sans
         rounded bg-amber-400 hover:bg-yellow-400 hover:text-gray-900"
        onClick={() => setCurLink("trending")}
      >
        <span className="hover:text-green-900"> IMDb</span>
      </NavLink>
      <div className="flex flex-row md:space-x-9 space-x-2 md:pr-12 pr-0">
        <div>
          <NavLink
            to="/"
            className={
              curLink === "trending"
                ? `font-medium no-underline text-white text-base md:text-xl rounded
              bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
                : `font-medium no-underline text-white text-base md:text-xl rounded
                hover:bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
            }
            onClick={() => setCurLink("trending")}
          >
            Trending
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/favourites"
            className={
              curLink === "fav"
                ? `font-medium no-underline text-white text-base md:text-xl rounded
                bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
                : `font-medium no-underline text-white text-base md:text-xl rounded
                hover:bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
            }
            onClick={() => setCurLink("fav")}
          >
            Favorites
          </NavLink>
        </div>
        <div>
          <NavLink to="#">
            <Dropdown overlay={menu} trigger={["click"]}>
              <NavLink
                to="#"
                className={
                  curLink === "account"
                    ? `font-medium no-underline text-white text-base md:text-xl rounded
              bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800 ant-dropdown-link`
                    : `font-medium no-underline text-white text-base md:text-xl rounded
                hover:bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800 ant-dropdown-link`
                }
                onClick={(e) => {
                  setCurLink("account");
                  e.preventDefault();
                }}
              >
                <UserOutlined />
              </NavLink>
            </Dropdown>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
