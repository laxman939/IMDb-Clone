import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6">
      <h2>Error! Page not found</h2>
      <button
        className="border-2 p-2 text-xl font-bold text-yellow-600
         border-red-800 rounded-xl bg-gray-600 hover:bg-gray-900"
        onClick={() => navigate("/")}
      >
        <ArrowLeftOutlined /> &nbsp; Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
