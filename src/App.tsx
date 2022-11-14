import React, { useState, Dispatch, SetStateAction } from 'react';
import AviaForm from './pages/AviaForm';
import AviaInfo from './pages/AviaInfo';

/* export type DepartureInfoProps = {
  departureInfo: {
    departTime: string;
    departCity: string;
    departDate: string;
  };
};

export type SetDepartureInfo = {
  setDepartureInfo: Dispatch<
    SetStateAction<{
      departTime: string;
      departCity: string;
      departDate: string;
    }>
  >;
}; */
const App = () => {
  /*  const [departureInfo, setDepartureInfo] = useState({
    departTime: '09:20',
    departCity: 'Москва',
    departDate: '19.07.2022',
  });
  const [arrivalInfo, setArrivalInfo] = useState({
    arrivalTime: '11:05',
    arrivalCity: 'Ростов на Дону',
    arrivalDate: '19.07.2022',
  });
  const Props = {
    departureInfo,
    setDepartureInfo,
    arrivalInfo,
    setArrivalInfo,
  }; */
  return (
    <div>
      <AviaForm />
      <AviaInfo />
    </div>
  );
};

export default App;
