import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const handleDelete = (id) => setTodo((prevTodo) => prevTodo.filter((obj) => obj.id !== id));
  

  const toggleCompleted = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            complete: !obj.complete,
          };
        }
        return obj;
      });
    });
  };

  const addTodo = (inputV) => setTodo (prevTodo=>[{ id: nanoid(), inputV, complete: false }, ...prevTodo])
    
  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, toggleCompleted, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
