import React,{useEffect} from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {

  useEffect(() => {
    if ( sessionStorage.getItem("isAuth") ) {
      navigate('/main');
    }
    
  }, []);
  const navigate = useNavigate();
  const [name, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const registerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name != "" && email != "" && password != "" && confirm != "") {
      const oldUser = JSON.parse(localStorage.getItem("users") || "{}");
      type Object = {
        name: string;
        email: string;
        password: string;
      };
      if (password != confirm) {
        alert("wrong password");
      }
      if (oldUser[email]) {
        alert("The user with email exists");
      } else {
        let saveUser: { [email: string]: Object } = {};
        saveUser = localStorage.getItem("users")
          ? JSON.parse(localStorage.getItem("users") || "{}")
          : {};
        saveUser[email] = {
          name: name,
          email: email,
          password: password,
        };
        localStorage.setItem("users", JSON.stringify(saveUser));
        alert("success");
        navigate("/login");
        
      }
    }
  };
  return (
    <form className="pt-20 register" onSubmit={registerSubmit}>
      <p className="mb-10 text-2xl text-slate-500">Create Your Account</p>
      <div className="">
        <TextField
          id="reg_user"
          label="User"
          type="text"
          variant="standard"
          className="w-3/12"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="py-1">
        <TextField
          id="reg_email"
          type="email"
          label="Email"
          variant="standard"
          className="w-3/12"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="py-1 ">
        <TextField
          id="reg_password"
          label="Password"
          type="password"
          variant="standard"
          className=" w-3/12"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="pt-1 ">
        <TextField
          id="reg_confirm"
          label="Confirm  Password"
          type="password"
          variant="standard"
          className="w-3/12 "
          value={confirm}
          onChange={(e) => {setConfirm(e.target.value); }}
          required
        />
      </div>
      <div className="pt-10">
        <button
          type="submit"
          className="rounded bg-blue-500 w-3/12 py-2 text-xl"
        >
          Sign Up
        </button>
       
      </div>
    </form>
  );
}

export default Register;
