import clsx from "clsx";
import { ChangeEventHandler } from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  maxLength: number;
}
const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className = "",
  maxLength,
}: inputProps) => {
  return (
    <>
      <input
        className={clsx(
          "w-full p-2 border-2 border-gray-300 rounded-2xl",
          className
        )}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
