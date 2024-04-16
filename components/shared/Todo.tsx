import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div className="w-full  flex flex-col" style={todoStyle}>
      <div
        className="p-6 bg-white min-w-80 w-80 h-80 flex flex-col justify-around"
        style={todoStyle}
      >
        <div className="flex justify-center">
          <ChangeTodo todo={todo} />
        </div>
        <span className="text-center ">
          <h1 className="font-bold uppercase">{todo.title}</h1>
          In publishing and graphic design
        </span>
        <div className="flex justify-end gap-5">
          <EditTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
