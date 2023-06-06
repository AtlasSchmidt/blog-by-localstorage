import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Landing from "./components/layout/landing";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import Navba from "./components/layout/navba";
import Main from "./components/blog/main";
import CreateBlog from "./components/blog/createBlog";
import DetailBlog from "./components/blog/detailBlog";
import EditBlog from "./components/blog/editBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Router>
      <Routes> 
          <Route path="/" element={<> <Navbar/> <Landing /> </>} />
          <Route path="/register" element={<> <Navbar/> <Register /> </>} />
          <Route path="/login" element={<> <Navbar/> <Login /> </>} />
          <Route path="/main" element={<> <Navba/> <Main /> </>} />
          <Route path="/createBlog" element={<> <Navba/> <CreateBlog /> </>} />
          <Route path="/detailBlog" element={<> <Navba/> <DetailBlog /> </>} />
          <Route path="/editBlog" element={<> <Navba/> <EditBlog /> </>} />
      </Routes>
      
    </Router>
    </div>

  );
}

export default App;
