import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, deleteItem }) => {
  const hasTodoItems = todoItems.length > 0;

  return (
    <div class="todo-list-container">
      <div
        style={{
          boxShadow: hasTodoItems ? "0 2px 10px rgb(0 0 0 / 10%)" : "none",
        }}
      >
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            text={item.todoItem}
            itemId={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
