const Button = ({ text, icon, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <span>{icon}</span>
      <p className="button-text">{text}</p>
    </div>
  );
};

export default Button;
