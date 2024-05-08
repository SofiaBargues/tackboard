"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Form from "../ui/Form";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { edit } from "@/app/actions/todoActions";
import { TodoType } from "@/types/todoType";
import ColorSelector from "./ColorSelector";

// Establecemos la aplicación Modal en el elemento #root del DOM.
Modal.setAppElement("body");

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  todo: TodoType;
  onDelete?: () => void;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, closeModal, todo }) => {
  const [modalTitle, setModalTitle] = useState(todo.title || "");
  const [modalMessage, setModalMessage] = useState(todo.mensaje || "");
  const [editTodo, setEditTodo] = useState(false);
  const hadleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }

    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
    closeModal(); //Agregue este closeModal para que al editar al apretar save se vaya el modal
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalTitle(e.target.value);
  };

  const handleSave = () => {
    closeModal();
  };

  return (
    <Modal
      className="bg-[#fefefe] absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo de Modal"
    >
      <div className="p-10">
        <DeleteTodo className="" todo={todo} onDelete={closeModal} />
        <h1 className="text-3xl text-neutral-800  my-10 font-bold">
          Note Editor
        </h1>
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />

          <div className="flex flex-col justify-center gap-6 ">
            <div className="label text-xl text-neutral-800">
              Your title:
              <Input
                onChange={(e) => setModalTitle(e.target.value)}
                value={modalTitle}
                type="text"
                name="newTitle"
                placeholder="EditTodo..."
                maxLength={15}
              />
            </div>
            <div className="label text-xl text-neutral-800">
              Your text:
              <textarea
                onChange={(e) => setModalMessage(e.target.value)}
                className="h-32 w-full p-2 rounded-2xl border-2 border-gray-300"
                value={modalMessage}
                name="messageEdit"
                maxLength={100}
                style={{
                  resize: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                placeholder="Edit Message..."
              />
            </div>

            <div className="label w-full text-xl text-neutral-800">
              Your color pin:
              <ColorSelector initialColor={todo.pinColor ?? "#FFFFFF"} />
            </div>
            <Button type="submit" text="Save" variant="save" />
          </div>
        </Form>
      </div>{" "}
    </Modal>
  );
};

export default CustomModal;
