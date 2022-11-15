import React, { Dispatch, SetStateAction } from 'react';
import '../scss/components/_aviaForm.scss';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

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
  let navigate = useNavigate();
  function validate() {
    const regexDate = new RegExp(
      '([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{2}$'
    );
    const regexCity = new RegExp('[а-яА-ЯЁё]');
    const deparDateOk = departureInfo.departDate
      ? regexDate.test(departureInfo.departDate) ||
        alert('Введите дату отправления в формате дд.мм.гг')
      : alert('Введите дату отправления');

    const arrivalDateOk = arrivalInfo.arrivalDate
      ? regexDate.test(arrivalInfo.arrivalDate) ||
        alert('Введите дату обратного билета в формате дд.мм.гг')
      : true;
    const deparCityOk = departureInfo.departCity
      ? regexCity.test(departureInfo.departCity) ||
        alert(
          'Наименование города отправления не может состоять из цифр или символов. Введите наименование на русском языке.'
        )
      : alert('Введите город отправления');
    const arrivalCityOk = arrivalInfo.arrivalCity
      ? regexCity.test(arrivalInfo.arrivalCity) ||
        alert(
          'Наименование города прибытия не может состоять из цифр или символов. Введите наименование на русском языке.'
        )
      : alert('Введите город прибытия');
    if (
      deparDateOk &&
      arrivalDateOk &&
      (deparCityOk ?? false) &&
      (arrivalCityOk ?? false)
    ) {
      navigate('/avia/info');
    } else {
      alert('Для поиска билетов, корректно заполните все необходимые поля');
    }
  }
  const isEnabled = () => {
    if (
      departureInfo.departCity &&
      departureInfo.departDate &&
      arrivalInfo.arrivalCity
    ) {
      return false;
    }
    return true;
  };
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
        <button className="button" onClick={validate} disabled={isEnabled()}>
          <p>Найти билеты</p>
        </button>
      </div>
    </div>
  );
};

export default AviaForm;
