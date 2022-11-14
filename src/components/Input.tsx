import "../scss/components/_input.scss";
import calendar_1 from "../assets/img/calendar_1.svg";

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};
const Input: React.FC<InputProps> = ({ label, placeholder, type }) => {
  return type === "date" ? (
    <div className="input-block">
      <div className="label">{label}</div>
      <div className="input-window">
        <img width="16" src={calendar_1} alt="Calendar grey" />
        <input type="text" placeholder={placeholder}></input>
      </div>
    </div>
  ) : (
    <div className="input-block">
      <div className="label">{label}</div>
      <div className="input-window">
        <input type={type} placeholder={placeholder}></input>
      </div>
    </div>
  );
};

export default Input;
