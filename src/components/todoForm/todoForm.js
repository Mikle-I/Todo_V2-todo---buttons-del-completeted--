import { useState } from "react";
import "./todoForm.module.css";
import Button from "../buttons/button";

function TodoForm({ addTodo }) {
  const [texts, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(texts);
    setText("");
  };

  return (
    <>
      <h1>Список дел:</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Введите задачу"
          value={texts}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit" title="Отправить">
          Отправить
        </Button>
      </form>
    </>
  );
}

export default TodoForm;
