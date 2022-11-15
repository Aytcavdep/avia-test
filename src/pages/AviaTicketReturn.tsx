import React from "react";
import "../scss/components/_aviaTicketReturn.scss";
import ticket_logo from "../assets/img/ticket_logo.svg";
import baggage from "../assets/img/baggage.svg";
import bag from "../assets/img/bag.svg";
import Button from "../components/Button";
import TicketScheme from "../components/TicketScheme";
import { AviaProps } from "./AviaForm";

const AviaTicketReturn: React.FC<AviaProps> = ({
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
    <div className="aviainfo-board-return">
      <div className="ticket-info-return">
        <div className="ticket-type-return">
          <div className="label">Невозвратный</div>
        </div>
        <div className="ticket-return">
          <div className="ticket-logo-return">
            <img width="39" src={ticket_logo} alt="Логотип авиакомпании" />
            <div>S7 Airlines</div>
          </div>
          <div className="ticket-setting-return">
            <TicketScheme {...useStateProps} />
            <div className="ticket-time-select-return">
            </div>
          </div>
          <div className="ticket-baggage-return">
            <img width="20" src={bag} alt="Сумка" />
            <img width="20" src={baggage} alt="Багаж" />
          </div>
        </div>
      </div>
      <div className="ticket-info-return back-ticket">
        <div className="ticket-type-return">
          <div className="label">Невозвратный</div>
        </div>
        <div className="ticket-return">
          <div className="ticket-logo-return">
            <img width="39" src={ticket_logo} alt="Логотип авиакомпании" />
            <div>S7 Airlines</div>
          </div>
          <div className="ticket-setting-return">
            <TicketScheme {...useStateProps} />
            <div className="ticket-time-select-return">
            </div>
          </div>
          <div className="ticket-baggage-return">
            <img width="20" src={bag} alt="Сумка" />
            <img width="20" src={baggage} alt="Багаж" />
          </div>
        </div>
      </div>
      <div className="ticket-price-return">
        <div>9 300 ₽</div>
      </div>
    </div>
  );
};

export default AviaTicketReturn;
