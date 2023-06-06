import React from "react";
import Login from "../auth/register";
import Register from "../auth/register";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="py-7 flex bg-sky-500 h-5 justify-evenly items-center">
      <div>
        {" "}
        <Link to="/" className="text-lg  mx-5 text-slate-300 decoration-none">
          Menu
        </Link>
      </div>
      <div className="container flex justify-end align-center">
        <div>
          <Link
            to="/register"
            className="text-lg  mx-5 text-slate-300 decoration-none"
          >
            Sign Up
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="text-lg   mx-5 text-slate-300 decoration-none"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
