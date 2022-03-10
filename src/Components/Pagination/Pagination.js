import React from "react";
import { useDispatch } from "react-redux";

import { pageNumberAction } from "../../Redux/Actions/Actions";
import { Pagination } from "antd";

import Top from "./Top";

export default function Pages() {
  // const pageNmbr = useSelector((state) => state.Page.page);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex justify-center text-center">
        <Pagination
          className="text-lg bg-stone-500 text-yellow-900 p-2 rounded-lg"
          total={10000}
          showQuickJumper
          defaultPageSize={10}
          onChange={(e) => dispatch(pageNumberAction(e))}
        />
      </div>
      <div className="flex justify-end text-center pb-4">
        <Top />
      </div>
    </div>
  );
}
