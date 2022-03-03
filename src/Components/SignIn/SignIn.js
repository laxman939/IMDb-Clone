/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

function SignIn() {
  return (
    <>
      <div className="max-h-full flex items-center justify-center py-12 px-20 sm:px-10 lg:px-10">
        <div className="max-w-md w-[60vw] md:w-[90vw] space-y-4  bg-white rounded-2xl shadow-2xl">
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
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
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
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
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
              >
                <span className="absolute flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
            <div className="flex justify-center text-center p-2">
              To create an account please click &nbsp;
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
