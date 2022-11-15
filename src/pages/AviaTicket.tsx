import React from "react";
import "../scss/components/_aviaTicket.scss";
import ticket_logo from "../assets/img/ticket_logo.svg";
import baggage from "../assets/img/baggage.svg";
import bag from "../assets/img/bag.svg";
import Button from "../components/Button";
import TicketScheme from "../components/TicketScheme";
import { AviaProps } from "./AviaForm";

const AviaTicket: React.FC<AviaProps> = ({
  departureInfo,
  setDepartureInfo,
  arrivalInfo,
  setArrivalInfo,
}: AviaProps) => {
  const useStateProps = {
    departureInfo,
    setDepartureInfo,
    arrivalInfo,
    setArrivalInfo,
  };
  return (
    <div className="aviainfo-board">
      <div className="ticket-info">
        <div className="ticket-type">
          <div className="label">Невозвратный</div>
        </div>
        <div className="ticket">
          <div className="ticket-logo">
            <img width="39" src={ticket_logo} alt="Логотип авиакомпании" />
            <div>S7 Airlines</div>
          </div>
          <div className="ticket-setting">
            <TicketScheme {...useStateProps} />
            <div className="ticket-time-select">
              <Button
                departureTime="09:20"
                arrivalTime="11:05"
                {...useStateProps}
              />
              <Button
                departureTime="10:20"
                arrivalTime="12:05"
                {...useStateProps}
              />
              <Button
                departureTime="11:20"
                arrivalTime="13:05"
                {...useStateProps}
              />
            </div>
          </div>
          <div className="ticket-baggage">
            <img width="20" src={bag} alt="Сумка" />
            <img width="20" src={baggage} alt="Багаж" />
          </div>
        </div>
      </div>
      <div className="ticket-price">
        <div>4 150 ₽</div>
      </div>
    </div>
  );
};

export default AviaTicket;
