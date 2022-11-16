import Todo from "../todo/todo";
import "./todoList.module.css";

function TodoList({ todos, delTodo, tog }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} udal={delTodo} toggle={tog} />
      ))}
      {todos.length === 0 && <h3 className="spisok">Cписок задач пуст</h3>}
    </div>
  );
}
export default TodoList;
