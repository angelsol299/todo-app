const Form = ({ onHandleChange, addTodoItem, todoText }) => {
  return (
    <div className="todo-form">
      {!todoText && (
        <div className="pen-icon">
          <i className="fa-solid fa-pen" id="trash-can-icon" />
        </div>
      )}
      <input
        className="input-submit-form"
        type="text"
        name="todo"
        placeholder="What needs to be accomplished?"
        value={todoText}
        onChange={onHandleChange}
        onKeyDown={addTodoItem}
      />
    </div>
  );
};

export default Form;
