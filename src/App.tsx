import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AviaForm from './pages/AviaForm';
import AviaTicket from './pages/AviaTicket';
import AviaTicketReturn from './pages/AviaTicketReturn';

const App = () => {
  const [departureInfo, setDepartureInfo] = useState({
    departTime: '09:20',
    departCity: '',
    departDate: '',
  });
  const [arrivalInfo, setArrivalInfo] = useState({
    arrivalTime: '11:05',
    arrivalCity: '',
    arrivalDate: '',
  });
  const useStateProps = {
    departureInfo,
    setDepartureInfo,
    arrivalInfo,
    setArrivalInfo,
  };
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AviaForm {...useStateProps} />} /> */}
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<AviaForm {...useStateProps} />} />
        <Route
          path="/avia/info"
          element={
            arrivalInfo.arrivalDate ? (
              <AviaTicketReturn {...useStateProps} />
            ) : (
              <AviaTicket {...useStateProps} />
            )
          }
        />
        {/*  <AviaTicketReturn {...useStateProps} /> */}
      </Routes>
    </div>
  );
};

export default App;
