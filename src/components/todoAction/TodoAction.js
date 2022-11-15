import Button from "../buttons/button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
function TodoAction({ resetTodo, deleteComplete, todos, completedChethik }) {
  return (
    todos.length !== 0 && (
      <>
        <Button title="Удалить всё" onClick={resetTodo}>
          <RiRefreshLine />
        </Button>
        <Button
          title="Удалить выполненное"
          onClick={deleteComplete}
          disabled={completedChethik}
        >
          <RiDeleteBin2Line />
        </Button>
      </>
    )
  );
}
export default TodoAction;
