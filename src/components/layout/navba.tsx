import React from "react";
import Login from "../auth/register";
import Register from "../auth/register";
import { Link } from "react-router-dom";

function navbar() {
  const oldArr = JSON.parse(localStorage.getItem("users") || "{}");
  let user = localStorage.getItem("id");
  return (
    <nav className="py-7 flex bg-blue-900 h-5  items-center">
      <div className="container flex ">
        <div className="flex ml-10">
          <a href="/" className=" text-white">
            <svg
              className="w-8 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Capa 1"
              viewBox="0 0 16.16 12.57"
            >
              <defs></defs>
              <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
              <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
            </svg>
          </a>
        </div>
        <div className="flex ml-[95%]">
        <img
            alt=""
            src="user.png"
            className=" object-cover w-8 h-8 rounded-xl"
          />
        <p className="text-lg text-white mx-[50%]  xl:mx-[90%] sm:mx-[10%]">
          {user}
        </p>
          <Link
            to="/"
            className="text-lg text-center  text-slate-300 decoration-none"
          >
            Logout
          </Link>
        </div>
        
      </div>
    </nav>
  );
}

export default navbar;
