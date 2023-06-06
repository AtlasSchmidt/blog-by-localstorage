import React from "react";
import { useEffect } from "react";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    if (sessionStorage.getItem("isAuth")) {
      navigate("/main");
    }
  }, []);
  const navigate = useNavigate();
  const [name, setusername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name != "" && email != "" && password != "") {
      const oldArr = JSON.parse(localStorage.getItem("users") || "{}");
      let olddata = oldArr[email];
      console.log(oldArr[email]);
      if (
        !olddata ||
        olddata["name"] != name ||
        olddata["password"] != password
      ) {
        alert("Create your account");
        navigate("/register");
      } else {
        localStorage.setItem("id", olddata["name"]);
        navigate("/main");
      }
    }
  };

  return (
    <form className="pt-20" onSubmit={loginSubmit}>
      <p className="mb-5 text-2xl text-slate-500">Please login</p>
      <div className="login w-full ">
        <TextField
          id="standard-basic"
          label="User"
          variant="standard"
          className="w-3/12"
          value={name}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          required
        />
      </div>
      <div className="py-1">
        <TextField
          id="standard-basic"
          type="email"
          label="Email"
          variant="standard"
          className="w-3/12"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />
      </div>
      <div className="py-1 ">
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          className="w-3/12"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="pt-10">
        <button
          className="hover:rounded-2xl bg-blue-500 w-3/12 py-2 text-xl"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
export default Login;
