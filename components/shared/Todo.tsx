"use client";
import { TodoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import { useState } from "react";
const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-6 flex flex-col justify-around shadow-2xl shadow-amber-950 min-w-80 w-80 h-80 bg-background ">
        <div
          className="m-auto h-8 w-8 rounded-full shadow-2xl shadow-amber-950 inline-block"
          style={{
            backgroundColor: todo.backgroundColor || "red",
          }}
        ></div>
        <span className="text-center">
          <h1 className="font-bold uppercase text-2xl">{todo.title}</h1>
          <p>{todo.mensaje}</p>
        </span>
        <div className="flex justify-end gap-5 text-xl mt-10">
          <EditTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
