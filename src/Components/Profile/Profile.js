import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Profile() {
  const navigate = useNavigate();

  const userName = useSelector((state) => state.UserName.userName);

  //Convert first character  to UpperCase
  let name = userName[0].toUpperCase() + userName.slice(1);

  return (
    <div className="m-4 text-center">
      <h2>Great {name}! You have successfully logged in...</h2>
      <div className="flex flex-row justify-around p-5">
        <button
          className="border-2 p-2 text-xl font-bold text-yellow-600
         border-red-800 rounded-xl bg-gray-600 hover:bg-gray-900"
          onClick={() => navigate("/")}
        >
          <ArrowLeftOutlined /> &nbsp; Back to Home
        </button>
      </div>
    </div>
  );
}
// localStorage.removeItem("name of the item")
