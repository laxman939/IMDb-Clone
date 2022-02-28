import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageNumberAction } from "../../Redux/Actions/Actions";

export default function Pagination() {
  const pageNmbr = useSelector((state) => state.Page.page);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-full 
        flex justify-center
        py-8 bg-gray-600"
      >
        <button
          className="
            p-2
            border-2
            border-red-900
            text-gray-500
            bg-gray-400
            border-r-0
            rounded-l-xl
            hover:bg-gray-700 text-white font-medium"
          onClick={() =>
            pageNmbr > 1 && dispatch(pageNumberAction(pageNmbr - 1))
          }
        >
          Previous
        </button>
        <button
          className="
          p-2
          px-3
            border-t-2 border-b-2
            border-red-900
            text-yellow-400 font-extrabold text-lg
            hover:bg-gray-400"
        >
          {pageNmbr}
        </button>
        <button
          className="
            p-2
            border-2
            border-red-900
            font-medium
            bg-gray-400
            border-r-0
            rounded-r-xl
            hover:bg-gray-700 text-white"
          onClick={() => dispatch(pageNumberAction(pageNmbr + 1))}
        >
          Next
        </button>
      </div>
    </>
  );
}
