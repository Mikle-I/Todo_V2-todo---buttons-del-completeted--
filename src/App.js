import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoH = (text) => {
    const newTodo = {
      text: text,
      completed: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  const delTodoH = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoH = (id) => {
    setTodos(
      todos.map((obj) => {
        return obj.id === id
          ? { ...obj, completed: !obj.completed }
          : { ...obj };
      })
    );
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodoH} />
      <TodoList delTodo={delTodoH} todos={todos} tog={toggleTodoH} />
    </div>
  );
}

export default App;
