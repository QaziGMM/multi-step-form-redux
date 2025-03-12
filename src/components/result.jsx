import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Result() {
  const state = useSelector((state) => state);
  return (
    <>
      <div className="lex-col  flex  items-center justify-center h-screen">
        <div className="py-28 rounded-3xl bg-white px-28 place-items-center   shadow-xl">
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <Link
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
            to="/"
          >
            Start over
          </Link>
        </div>
      </div>
    </>
  );
}

export default Result;
