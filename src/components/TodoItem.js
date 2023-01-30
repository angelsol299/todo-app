import { useState } from "react";

const TodoItem = ({ text }) => {
  const [checkTodoItem, setCheckTodoItem] = useState(false);

  const checkItem = () => setCheckTodoItem((prev) => !prev);

  return (
    <div className="todo-item">
      <div>
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
          <span class="checkmark"></span> {text}
        </label>
      </div>
      <p>*</p>
    </div>
  );
};

export default TodoItem;
