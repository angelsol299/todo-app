const Form = ({ onHandleChange, addTodoItem, todoText }) => {
  return (
    <div className="todo-form">
      <input
        className="input-submit-form"
        type="text"
        name="todo"
        placeholder="What needs to be accomplished?"
        value={todoText}
        onChange={onHandleChange}
        onKeyDown={addTodoItem}
      />
      {/* <button type="submit">Add Todo</button> */}
    </div>
  );
};

export default Form;
