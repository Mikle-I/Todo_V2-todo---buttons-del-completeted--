import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";
import TodoAction from "./components/todoAction/TodoAction";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoH = (text) => {
    const newTodo = {
      text: text,
      completed: false,
      id: uuidv4(),
    };
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

  const resetTodoH = () => {
    setTodos([]);
  };

  const deleteCompletedH = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="App">
      <TodoForm addTodo={addTodoH} />
      <TodoAction
        resetTodo={resetTodoH}
        deleteComplete={deleteCompletedH}
        todos={todos}
        completedChethik={!completedTodosCount}
      />
      <TodoList delTodo={delTodoH} todos={todos} tog={toggleTodoH} />
      {completedTodosCount > 0 && (
        <h2>Завершено задач:{completedTodosCount}</h2>
      )}
    </div>
  );
}

export default App;
