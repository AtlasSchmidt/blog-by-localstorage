import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export type blogType = {
  title: string;
  text: string;
  picture: string;
  date: string;
};
function CreateBlog() {
  const navigate = useNavigate();
  const [title, settitle] = React.useState("");
  const [text, settext] = React.useState("");
  const [picture, setpicture] = React.useState("");
  const [date, setdate] = React.useState("");
  const user = localStorage.getItem("id");
  const Addblog = (e: React.FormEvent) => {
    e.preventDefault();
    if (title != "" && text != "" && picture != "" && date != "") {
      let blogdata: blogType = {
        title: title,
        text: text,
        picture: picture,
        date: date,
      };

      // const [blog,setblog]=useState([blogdata]);
      // setblog([...blog, blogdata]);
      let blog: Array<any> = [];
      blog = JSON.parse(localStorage.getItem("blog") || "{}");
      if (!localStorage.blog) {
        blog = [];
        blog.push(blogdata);
        console.log("here:", blog);
        localStorage.setItem("blog", JSON.stringify(blog));
        navigate("/main");
      } else {
        console.log(blog);
        blog.push(blogdata);
        console.log("here:", blog);
        localStorage.setItem("blog", JSON.stringify(blog));
        navigate("/main");
      }
    }
  };
  return (
    <div className="flex justify-center py-[2%]">
      <form className="bg-sky-200 w-[60%] rounded-xl" onSubmit={Addblog}>
        <p className=" pt-[15%] text-lg tracking-tight hover:tracking-wide font-bold">
          title
        </p>

        <div className=" flex relative justify-center">
          <input
            type="text"
            id="with-email"
            className="flex w-[70%] rounded-r-lg border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="url"
            placeholder="www.google.com"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>
        <div className="py-10">
          <p className=" text-lg tracking-tight hover:tracking-wide font-bold">
            text
          </p>

          <label className="text-gray-700 flex justify-center">
            <textarea
              className="flex w-[70%]  px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            ></textarea>
          </label>
        </div>
        <div className="">
          <p className="text-lg tracking-tight hover:tracking-wide font-bold">
            import picture
          </p>

          <div className="flex relative justify-center">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              http://
            </span>
            <input
              type="text"
              id="with-email"
              className="flex w-[62%] rounded-r-lg border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="url"
              value={picture}
              onChange={(e) => {
                setpicture(e.target.value);
              }}
              placeholder="www.google.com"
            />
          </div>
        </div>
        <div className="pt-10">
          <p className="text-lg tracking-tight hover:tracking-wide font-bold">
            Date
          </p>

          <div className="flex relative justify-center ">
            <input
              type="date"
              id="with-email"
              className="flex w-[70%] rounded-r-lg border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="url"
              placeholder="www.google.com"
              value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
          </div>
          <div>
            <input type="text" hidden />
          </div>
        </div>
        <div className="py-10">
          <button type="submit" className="bg-blue-500 p-2 rounded px-5">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateBlog;
