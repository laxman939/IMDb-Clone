/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInClick, getUserName } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

import { UserOutlined } from "@ant-design/icons";
import { Alert } from "react-bootstrap";

import generateUserName from "generate-username-from-email";

function SignIn() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const [errorText, setErrorText] = useState();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  // From local storage
  let localData = localStorage.getItem("users");
  localData = JSON.parse(localData);

  function handleChange(e) {
    setSigninData({
      ...signinData,
      [e.target.name]: e.target.value,
    });
  }

  function signinBtn(e) {
    e.preventDefault();

    //To Eliminate numbers and  Extract username
    let extractedName = generateUserName(signinData.email).replace(
      /[0-9]/g,
      ""
    );

    if (signinData.email === "" && signinData.password === "") {
      setErrorText("Please fill fields.");
    } else if (
      localData.map((u) => u.email === signinData.mail) &&
      localData.map((u) => u.password === signinData.password)
    ) {
      setErrorText("");
      dispatcher(signInClick(true));
      dispatcher(getUserName(extractedName));
      navigate("/success");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-10 sm:px-10 lg:px-10">
        <div className="w-[88vw] md:w-[60vw] space-y-2  bg-white rounded-2xl shadow-2xl">
          <div
            className="text-center text-2xl md:text-4xl p-2 py-3 rounded-t-2xl font-mono font-extrabold
          bg-black text-white opacity-90 shadow-md"
          >
            Login here
          </div>
          <div
            className="flex justify-center
          font-extrabold text-6xl text-orange-900"
          >
            <UserOutlined className="border-4 rounded-md bg-gray-500 hover:bg-gray-400" />
          </div>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px m-4 p-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 
                  placeholder-gray-500 text-gray-900 rounded-t-md 
                  sm:text-sm peer"
                  placeholder="Email address"
                  value={signinData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="py-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full 
                  px-3 py-2 border border-gray-300 placeholder-gray-500 
                  text-gray-900 rounded-b-md sm:text-sm peer"
                  placeholder="Password"
                  value={signinData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-2 mb-1 flex justify-center">
              <button
                type="submit"
                className="group w-[20vw] flex justify-center items-center
                py-2 border border-transparent 
                text-sm font-medium rounded-md text-white bg-orange-900 
                hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={signinBtn}
              >
                Sign in
              </button>
            </div>

            <Alert color="primary" variant="danger" className="text-center">
              {errorText}
            </Alert>

            <div className="flex justify-center text-base text-center p-2">
              To create an account click &nbsp;
              <Link
                to="/signup"
                className="text-red-700 font-extrabold text-base hover:text-red-600"
              >
                here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
