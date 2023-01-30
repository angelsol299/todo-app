import { useState } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Button from "../components/Button";

const Home = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [todoText, setTodoText] = useState("");

  const onHandleChange = (event) => {
    setTodoText(event.target.value);
  };

  const addTodoItem = (event) => {
    if (event.key === "Enter") {
      setTodoItems([...todoItems, todoText]);
      setTodoText("");
    }
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
      <TodoList todoItems={todoItems} />
      <Button text={"CLEAR ALL"} icon={"*"} onClick={clearItems} />
    </div>
  );
};

export default Home;
