import "../scss/components/_button.scss";

type ButtonProps = {
  departureTime: string;
  arrivalTime: string;
  isActive?: boolean;
};
const Button: React.FC<ButtonProps> = ({ departureTime, arrivalTime }) => {
  return (
    <div className="ticket-time-button">
      <div className="time-button">
        <span className="time-departure">{departureTime}</span>
        <span> - </span>
        <span className="time arrival">{arrivalTime}</span>
      </div>
    </div>
  );
};

export default Button;
