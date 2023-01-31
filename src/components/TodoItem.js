import { useState } from "react";
import TrashCanIcon from "../components/TrashCanIcon";

const TodoItem = ({ text, itemId, deleteItem }) => {
  const [checkTodoItem, setCheckTodoItem] = useState(false);

  const checkItem = () => setCheckTodoItem((prev) => !prev);

  const onHandleDeleteItem = () => deleteItem(itemId);

  return (
    <div className="todo-item">
      <label
        class="todo-item-container"
        style={{
          "text-decoration": checkTodoItem ? "line-through" : "none",
          color: checkTodoItem ? "green" : "black",
        }}
      >
        <input
          type="checkbox"
          className="check-box-todo-item"
          id="todo-item"
          name="todo-item"
          value="todo-item"
          onChange={checkItem}
        />
        <span
          style={{
            border: checkTodoItem ? "1px solid #34c144" : "1px solid black",
          }}
          class="checkmark"
        ></span>{" "}
        {text}
      </label>
      <div onClick={onHandleDeleteItem}>
        <TrashCanIcon />
      </div>
    </div>
  );
};

export default TodoItem;
