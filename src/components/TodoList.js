import TodoItem from "./TodoItem";

const TodoList = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={item} text={item} />
      ))}
    </div>
  );
};

export default TodoList;
