import '../scss/components/_ticketScheme.scss';

type TicketSchemeProps = {
  departureInfo: {
    departTime: string;
    departCity: string;
    departDate: string;
  };
  arrivalInfo: {
    arrivalTime: string;
    arrivalCity: string;
    arrivalDate: string;
  };
  returnTicket?: boolean;
};
const TicketScheme: React.FC<TicketSchemeProps> = ({
  departureInfo,
  arrivalInfo,
  returnTicket,
}) => {
  const { departTime, departCity, departDate } = departureInfo;
  const { arrivalTime, arrivalCity, arrivalDate } = arrivalInfo;
  if (returnTicket) {
    return (
      <div className="ticket-departure-arrival">
        <div className="ticket-departure">
          <div className="ticket-time">{departTime}</div>
          <div className="ticket-date">
            {arrivalCity}
            <br />
            {arrivalDate.slice(0, 6)}20
            {arrivalDate.slice(6)}
          </div>
        </div>
        <div className="ticket-scheme">
          <div className="ticket-scheme-svo-rov">
            <div className="ticket-svo">SVO</div>
            <div></div>
            <div className="ticket-rov">ROV</div>
          </div>
          <div className="ticket-scheme-line">
            <div className="circle"></div>
            <hr />
            <div className="circle"></div>
          </div>
          <div className="ticket-scheme-title">В пути 1 ч 55 мин</div>
        </div>
        <div className="ticket-arrival">
          <div className="ticket-time">{arrivalTime}</div>
          <div className="ticket-date">
            {departCity}
            <br />
            {arrivalDate.slice(0, 6)}20
            {arrivalDate.slice(6)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="ticket-departure-arrival">
      <div className="ticket-departure">
        <div className="ticket-time">{departTime}</div>
        <div className="ticket-date">
          {departCity}
          <br />
          {departDate.slice(0, 6)}20
          {departDate.slice(6)}
        </div>
      </div>
      <div className="ticket-scheme">
        <div className="ticket-scheme-svo-rov">
          <div className="ticket-svo">SVO</div>
          <div></div>
          <div className="ticket-rov">ROV</div>
        </div>
        <div className="ticket-scheme-line">
          <div className="circle"></div>
          <hr />
          <div className="circle"></div>
        </div>
        <div className="ticket-scheme-title">В пути 1 ч 55 мин</div>
      </div>
      <div className="ticket-arrival">
        <div className="ticket-time">{arrivalTime}</div>
        <div className="ticket-date">
          {arrivalCity}
          <br />
          {departDate.slice(0, 6)}20
          {departDate.slice(6)}
        </div>
      </div>
    </div>
  );
};

export default TicketScheme;
