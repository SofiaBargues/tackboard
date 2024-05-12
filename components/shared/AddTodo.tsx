import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";
import { TodoType } from "@/types/todoType";
import ColorSelector from "./ColorSelector";

type ChangeOpenFunction = (isOpen: boolean) => void; //PUSE ESTE LINEA DE CODIGO Y LO DE ABAJO

const AddTodo = ({ changeOpen }: { changeOpen: ChangeOpenFunction }) => {
  const handleSubmit = () => changeOpen(false);

  return (
    <Form action={create} className=" m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10 w-[500px] items-stretch px-10">
        <h1 className="text-3xl text-neutral-800 font-bold">Write your note</h1>
        <div className="label text-xl text-neutral-800">
          Your title:
          <Input
            name="input"
            type="text"
            placeholder="Add Todo..."
            maxLength={15}
          />
        </div>
        <div className="label text-xl text-neutral-800">
          Your text:
          <textarea
            className="h-32 w-full p-2 rounded-2xl border-2 border-gray-300"
            name="message"
            placeholder="Add Message..."
            maxLength={100}
            style={{ resize: "none", width: "100%", boxSizing: "border-box" }}
          />
        </div>
        <div className="flex justify-center text-white text-xl">
          <div className="label w-full text-xl text-neutral-800">
            Your color pin:
            <ColorSelector initialColor="red" />
          </div>
        </div>
        <Button className="" type="submit" text="Add" variant="save" />
      </div>
    </Form>
  );
};

export default AddTodo;
