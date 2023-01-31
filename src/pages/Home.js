import { useState } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onHandleChange = (event) => {
    setTodoText(event.target.value);
  };

  const addTodoItem = (event) => {
    if (event.key === "Enter" && todoText.length > 0) {
      setTodoItems([{ id: uuidv4(), todoItem: todoText }, ...todoItems]);
      setTodoText("");
    }
  };

  const deleteItem = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };

  const clearItems = () => setTodoItems([]);

  return (
    <div className="home-page-container">
      <p className="main-title">REACT TO-DO</p>
      <Form
        onHandleChange={onHandleChange}
        addTodoItem={addTodoItem}
        todoText={todoText}
        handleSubmit={() => console.log("submitted")}
      />
      <TodoList todoItems={todoItems} deleteItem={deleteItem} />
      <Button text={"CLEAR ALL"} icon={"*"} onClick={clearItems} />
    </div>
  );
};

export default Home;
