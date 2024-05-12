import { ChangeEvent, useState } from "react";

function ColorSelector({ initialColor = "red" }: { initialColor: string }) {
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    //Puse este ChangEvent
    setSelectedColor(e.target.value);
  };

  return (
    <div className="flex justify-center xs:gap-4 sm:gap-9 xl:gap-14 my-12">
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-red-500 ${
            selectedColor === "red" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="pinColor"
            value="red"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-blue-500 ${
            selectedColor === "blue" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="pinColor"
            value="blue"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-yellow-500 ${
            selectedColor === "yellow" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="pinColor"
            value="yellow"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-green-500 ${
            selectedColor === "green" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="pinColor"
            value="green"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
    </div>
  );
}

export default ColorSelector;
