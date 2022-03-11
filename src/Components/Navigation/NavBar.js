import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Tooltip } from "antd";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [curLink, setCurLink] = useState("trending");

  const isSignin = useSelector((state) => state.IsSignIn.isSignIn);

  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button
          type="submit"
          className="p-1 md:w-[7vw] w-[15vw] text-yellow-900 hover:text-yellow-300
           border-red-600 rounded border hover:bg-gray-600"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </Menu.Item>
      {isSignin === true ? (
        <Menu.Item key="2">
          <button
            type="submit"
            className="p-1 md:w-[7vw] w-[15vw] text-yellow-900 hover:text-yellow-300
           border-red-600 rounded border hover:bg-gray-600"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Logout
          </button>
        </Menu.Item>
      ) : (
        <Menu.Item key="2">
          <button
            type="submit"
            className="p-1 md:w-[7vw] w-[15vw] text-yellow-900 hover:text-yellow-300
           border-red-600 rounded border hover:bg-gray-600"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </button>
        </Menu.Item>
      )}
    </Menu>
  );

  const text = <span>Account</span>;

  const buttonWidth = 50;

  return (
    <div
      className="border-2 border-red-700 static
    md:px-6 px-2 py-3 md:space-x-6  space-x-1
     flex  items-center justify-between 
     bg-gray-900 hover:bg-gray-700 hover:border-red-500"
    >
      <NavLink
        to="/"
        className="text-lg md:text-2xl px-2 py-1 text-gray-800 no-underline font-extrabold font-sans
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
                ? `font-medium no-underline text-white text-sm md:text-xl rounded
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
                ? `font-medium no-underline text-white text-sm md:text-xl rounded
                bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
                : `font-medium no-underline text-white text-base md:text-xl rounded
                hover:bg-yellow-900 m-1 px-2 py-1 border-2 border-amber-800`
            }
            onClick={() => {
              isSignin === "true" ? setCurLink("fav") : setCurLink("account");
            }}
          >
            Favorites
          </NavLink>
        </div>

        <div style={{ marginLeft: buttonWidth, whiteSpace: "nowrap" }}>
          <Tooltip placement="leftTop" title={text}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <NavLink
                to="#"
                className={
                  curLink === "account"
                    ? `font-medium no-underline text-white text-base md:text-xl rounded
              bg-yellow-900 m-1 px-1 py-1 border-2 border-amber-800 ant-dropdown-link`
                    : `font-medium no-underline text-white text-base md:text-xl rounded
                hover:bg-yellow-900 m-1 px-1 py-1 border-2 border-amber-800 ant-dropdown-link`
                }
                onClick={(e) => {
                  setCurLink("account");
                  e.preventDefault();
                }}
              >
                <UserOutlined />
              </NavLink>
            </Dropdown>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
