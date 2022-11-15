import { IconName, RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import "./todo.modul.css";

function Todo({ udal, todo, toggle }) {
  return (
    <div
      className={`td ${todo.completed ? "compTodo" : ""}`}
      onDoubleClick={() => udal(todo.id)}
    >
      <RiTodoFill />
      <div>{todo.text}</div>
      <RiDeleteBin2Line className="deleteIcon" onClick={() => udal(todo.id)} />
      <FaCheck className="checkIcon" onClick={() => toggle(todo.id)} />
    </div>
  );
}

export default Todo;
