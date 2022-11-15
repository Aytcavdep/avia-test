import { useState } from "react";
import AviaForm from "./pages/AviaForm";
import AviaTicket from "./pages/AviaTicket";
import AviaTicketReturn from "./pages/AviaTicketReturn";

const App = () => {
  const [departureInfo, setDepartureInfo] = useState({
    departTime: "09:20",
    departCity: "Москва",
    departDate: "19.07.2022",
  });
  const [arrivalInfo, setArrivalInfo] = useState({
    arrivalTime: "11:05",
    arrivalCity: "Ростов на Дону",
    arrivalDate: "19.07.2022",
  });
  const useStateProps = {
    departureInfo,
    setDepartureInfo,
    arrivalInfo,
    setArrivalInfo,
  };
  return (
    <div>
      <AviaForm {...useStateProps} />
      <AviaTicket {...useStateProps} />
      <AviaTicketReturn {...useStateProps} />
    </div>
  );
};

export default App;
