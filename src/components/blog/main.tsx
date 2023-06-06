import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { blogType } from "./createBlog";
import EditBlog from "./editBlog";

function Main() {
  const navigate = useNavigate();
  let blogs = JSON.parse(`${localStorage.getItem("blog")}`);
  const addhandle = (e: React.FormEvent) => {
    navigate("/createBlog");
  };
  const [count, setCount] = React.useState(0);
  function handleIncrement(e: React.FormEvent) {
    setCount(count + 1);
  }
  const Editblog = (e: React.FormEvent) => {  
    const[k,setkey]=React.useState("");
    setkey(k);
   
    localStorage.setItem("blog",JSON.stringify(k));
    console.log();

    // navigate("/editBlog");
  };
  return (
    <div>
      <div className="bg-sky-200 h-[50%] p-10">
        <button
          className="bg-pink-500 scale-200 text-white
         rounded-xl hover:bg-sky-500 py-3 px-[10%] text-[30px] transition ease-in-out 
         delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
         duration-300"
          onClick={addhandle}
        >
          Add Blog
        </button>
      </div>
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-gray-800"></p>
            <p className="text-2xl font-light text-gray-400"></p>
          </div>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"></form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {localStorage.blog ? (
            blogs.map((blog: blogType, k: number) => {
              return (
                <div
                  key={k}
                  className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
                >
                  <a
                    href="/detailBlog"
                    className="hover:drop-shadow-xl delay-150 bg-blue-500 hover:w-[110%] block w-full h-full"
                  >
                    <img
                      alt="blog photo"key={k}
                      src={blog.picture}
                      className="object-cover w-full max-h-40"
                    />
                    <div key={k} className="w-full p-4 bg-white dark:bg-gray-800">
                      <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {blog.title}
                      </p>
                      <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        {blog.text}
                      </p>
                      <div className="flex items-center justify-center mt-4">
                        <div className="flex flex-col justify-center ml-4 text-sm">
                          <p key={k} className="text-gray-400 dark:text-gray-300">
                            product: {blog.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="flex justify-center =  pt-5 align-center">
                    <a>
                      <div className="mx-5 flex" onClick={handleIncrement}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className=" bi bi-suit-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                        </svg>
                        <sup>+1</sup>
                      </div>
                    </a>
                    <div className="mx-5 flex" onClick={handleIncrement}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trophy"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                      </svg>
                      <sup>+{count}</sup>
                    </div>
                    <div key={k}  className="mx-5 flex" onClick={(Editblog)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Main;
