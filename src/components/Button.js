import TrashCanIcon from "./TrashCanIcon";

const Button = ({ text, icon, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <TrashCanIcon />
      <p className="button-text">{text}</p>
    </div>
  );
};

export default Button;
