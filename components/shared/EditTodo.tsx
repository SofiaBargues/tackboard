"use client";

import Button from "../ui/Button";
import { useState } from "react";
import { TodoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";
import CustomModal from "./Modal";

const EditTodo = ({ todo }: { todo: TodoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const hadleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={hadleEdit} text={<BiEdit />} variant="" />
      <CustomModal isOpen={editTodo} closeModal={handleSubmit} todo={todo} />
    </div>
  );
};

export default EditTodo;
