"use client";
import React, { useState } from "react";
import AddTodo from "./AddTodo";

const SideBar = ({ disabled }) => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => setOpen(false);
  return (
    <div className="bg-primary/100 hover:bg-pink-600 text-white rounded-3xl  p-5 shadow-md">
      <button
        className="m-2 text-center text-2xl"
        onClick={() => setOpen(true)}
        disabled={disabled}
      >
        New note
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`${
          open ? "sm:w-4/6  lg:w-2/3 xl:w-1/2" : "w-0"
        } bg-background min-h-screen fixed top-0 right-0 transition-all duration-300 flex justify-center `}
      >
        <div className={`${!open && "hidden"} pt-3 flex justify-around`}>
          <AddTodo changeOpen={changeOpen} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
