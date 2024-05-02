"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  className: "";
  variant: "action" | "save" | "default" | "delete" | ""; //Agregue la variante ""
}

const Button = ({ type, text, onClick, variant = "default" }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          variant === "default" &&
            "rounded-3xl px-3 py-3  text-black/80 hover:bg-accent  hover:text-black  border-accent",
          variant === "save" &&
            " bg-secondary p-3 text-center rounded-3xl hover:text-background shadow-md  hover:bg-secondary/80  text-md text-white ",
          variant === "delete" &&
            "hover:bg-red-600 border border-red-600 text-md text-red-600 bg-background p-3 flex  rounded-3xl hover:text-background "
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
