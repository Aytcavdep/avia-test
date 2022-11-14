import React, { useState, Dispatch, SetStateAction } from 'react';
import '../scss/components/_aviaForm.scss';
import Input from '../components/Input';
/* import { DepartureInfoProps } from '../App' */

const Avia: React.FC = () => {
  const [departureInfo, setDepartureInfo] = useState({
    departTime: '09:20',
    departCity: 'Москва',
    departDate: '19.07.2022',
  });
  const [arrivalInfo, setArrivalInfo] = useState({
    arrivalTime: '11:05',
    arrivalCity: 'Ростов на Дону',
    arrivalDate: '19.07.2022',
  });
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
        <button className="button">
          <p>Найти билеты</p>
        </button>
      </div>
    </div>
  );
};

export default Avia;
