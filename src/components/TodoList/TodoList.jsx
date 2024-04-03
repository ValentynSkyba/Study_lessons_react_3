import todosData from "./../../assets/todos.json";
import s from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("todo-data"));
    if (savedData?.length) {
      // знак питання це теж саме що перевірка savedData && savedData?.length
      return savedData;
    }
    return [];
  });
  const [newTodoTitle, setNewTodoTile] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todo-data", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      //   id: new Date().getTime(),
      id: nanoid(),
      todo: newTodoTitle,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoTile("");
  };

  const handleDeleteSelected = () => {
    setTodos((prev) => prev.filter((item) => !item.completed));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleToggleTodo = (id) => {
    console.log(id);
    // setTodos((prev) =>
    //   prev.map((item) =>
    //     item.id === id ? { ...item, completed: !item.completed } : item
    //   )
    // );
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    //Identification
    // filter
    //massive
    console.log(id);
    const newData = todos.filter((item) => item.id !== id);
    console.log(newData);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex">
        <input
          value={newTodoTitle}
          onChange={(e) => setNewTodoTile(e.target.value)}
          className={s.input}
          type="text"
        />
        <button onClick={handleAddTodo} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        ))}
      </ul>
      <button onClick={handleDeleteSelected} className="btn border">
        Delete Selected
      </button>
      <button onClick={handleDeleteAll} className="btn border">
        Delete All
      </button>
    </>
  );
};
