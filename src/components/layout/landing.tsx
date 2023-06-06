import React from "react";
import Login from "../auth/register";
import Register from "../auth/register";
import { Link } from "react-router-dom";


function Landing() {

  return (
      <div className="p-20">
          <Link className="text-pink-700 text-4xl  font-mono hover:text-5xl"
         to="/register">Welcome to this site</Link>
      </div>

  );
}

export default Landing;
