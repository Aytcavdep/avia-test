import '../scss/components/_input.scss';
import calendar_1 from '../assets/img/calendar_1.svg';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  type?: string;
};
const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  type,
}) => {
  return type === 'date' ? (
    <div className="input-block">
      <div className="label">{label}</div>
      <div className="input-window">
        <img width="16" src={calendar_1} alt="Calendar grey" />
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  ) : (
    <div className="input-block">
      <div className="label">{label}</div>
      <div className="input-window">
        <input
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  );
};

export default Input;
