"use client";
import { TodoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import { useState } from "react";
const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="p-6 flex flex-col justify-between shadow-2xl shadow-amber-950 min-w-80 w-80 h-80 bg-background ">
      <div className=" w-full h-16 flex justify-center items-start ">
        <div
          className="h-8 w-8 rounded-full"
          style={{
            backgroundColor: todo.backgroundColor || "red",
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <span className="text-center">
          <h1 className="font-bold uppercase text-2xl">{todo.title}</h1>
          <p>{todo.mensaje}</p>
        </span>
      </div>
      <div className="flex justify-end gap-5 text-xl mt-10">
        <EditTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
