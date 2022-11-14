import React from 'react';
import '../scss/components/_aviaInfo.scss';
import ticket_logo from '../assets/img/ticket_logo.svg';
import baggage from '../assets/img/baggage.svg';
import bag from '../assets/img/bag.svg';

const AviaInfo = () => {
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
            <div className="ticket-departure-arrival">
              <div className="ticket-departure">
                <div className="ticket-time">09:20</div>
                <div className="ticket-date">Москва 19.05.2022</div>
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
                <div className="ticket-time">09:20</div>
                <div className="ticket-date">Ростов на Дону 19.05.2022</div>
              </div>
            </div>
            <div className="ticket-time-select">
              <div className="ticket-time-button">
                <div className="time-button active">
                  <span className="time-departure">09:20</span>
                  <span> - </span>
                  <span className="time arrival">11:05</span>
                </div>
              </div>
              <div className="ticket-time-button">
                <div className="time-button">
                  <span className="time-departure">10:20</span>
                  <span> - </span>
                  <span className="time arrival">12:05</span>
                </div>
              </div>
              <div className="ticket-time-button">
                <div className="time-button">
                  <span className="time-departure">11:20</span>
                  <span> - </span>
                  <span className="time arrival">13:05</span>
                </div>
              </div>
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

export default AviaInfo;
