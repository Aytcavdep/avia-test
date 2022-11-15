import React, { Dispatch, SetStateAction } from "react";
import "../scss/components/_aviaForm.scss";
import Input from "../components/Input";

export type DepartureInfoType = {
  departTime: string;
  departCity: string;
  departDate: string;
};
export type ArrivalInfoType = {
  arrivalTime: string;
  arrivalCity: string;
  arrivalDate: string;
};
export interface AviaProps {
  departureInfo: DepartureInfoType;
  setDepartureInfo: Dispatch<SetStateAction<DepartureInfoType>>;
  arrivalInfo: ArrivalInfoType;
  setArrivalInfo: Dispatch<SetStateAction<ArrivalInfoType>>;
}
const AviaForm: React.FC<AviaProps> = ({
  departureInfo,
  setDepartureInfo,
  arrivalInfo,
  setArrivalInfo,
}: AviaProps) => {
  function validateDate() {
    const regex = new RegExp(
      "([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{2}$"
    );
    const deparDateOk = regex.test(departureInfo.departDate);
    const arrivalDateOk = arrivalInfo.arrivalDate
      ? regex.test(arrivalInfo.arrivalDate)
      : true;
    if (deparDateOk && arrivalDateOk) {
      alert("Ok");
    } else {
      alert("not Ok");
    }
  }
  const onChangeDepartCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureInfo((prevState) => ({
      ...prevState,
      departCity: e.target.value,
    }));
  };

  const onChangeArrivalCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalInfo((prevState) => ({
      ...prevState,
      arrivalCity: e.target.value,
    }));
  };

  const onChangeDepartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureInfo((prevState) => ({
      ...prevState,
      departDate: e.target.value,
    }));
  };

  const onChangeArrivalDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalInfo((prevState) => ({
      ...prevState,
      arrivalDate: e.target.value,
    }));
  };

  return (
    <div className="aviaform-board">
      <div className="form">
        <Input
          value={departureInfo.departCity}
          onChange={onChangeDepartCity}
          label="Откуда"
          placeholder="Город вылета"
        />
        <Input
          value={arrivalInfo.arrivalCity}
          onChange={onChangeArrivalCity}
          label="Куда"
          placeholder="Город прилёта"
        />
        <Input
          value={departureInfo.departDate}
          onChange={onChangeDepartDate}
          label="Туда"
          placeholder="дд.мм.гг"
          type="date"
        />
        <Input
          value={arrivalInfo.arrivalDate}
          onChange={onChangeArrivalDate}
          label="Обратно"
          placeholder="дд.мм.гг"
          type="date"
        />
      </div>
      <div className="button-block">
        <button className="button" onClick={validateDate}>
          <p>Найти билеты</p>
        </button>
      </div>
    </div>
  );
};

export default AviaForm;
