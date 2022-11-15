import { Dispatch, SetStateAction } from "react";
import { ArrivalInfoType, DepartureInfoType } from "../pages/AviaForm";
import "../scss/components/_button.scss";

type ButtonProps = {
  departureTime: string;
  arrivalTime: string;
  departureInfo: DepartureInfoType;
  setDepartureInfo: Dispatch<SetStateAction<DepartureInfoType>>;
  setArrivalInfo: Dispatch<SetStateAction<ArrivalInfoType>>;
};
const Button: React.FC<ButtonProps> = ({
  departureTime,
  arrivalTime,
  departureInfo,
  setDepartureInfo,
  setArrivalInfo,
}) => {
  const handleChangeTime = () => {
    setDepartureInfo((prevState) => ({
      ...prevState,
      departTime: departureTime,
    }));
    setArrivalInfo((prevState) => ({
      ...prevState,
      arrivalTime: arrivalTime,
    }));
  };
  return (
    <div className="ticket-time-button">
      <button
        onClick={handleChangeTime}
        className={
          departureInfo.departTime === departureTime
            ? "time-button active"
            : "time-button"
        }
      >
        <span className="time-departure">{departureTime}</span>
        <span> - </span>
        <span className="time arrival">{arrivalTime}</span>
      </button>
    </div>
  );
};

export default Button;
