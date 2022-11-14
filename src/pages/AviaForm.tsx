import React from 'react';
import '../scss/components/_aviaForm.scss';
import calendar_1 from '../assets/img/calendar_1.svg';

const Avia: React.FC = () => {
  return (
    <div className="aviaform-board">
      <div className="form">
        <div className="input-block">
          <div className="label">Откуда</div>
          <div className="input-window">
            <input type="text" placeholder="Город вылета"></input>
          </div>
        </div>
        <div className="input-block">
          <div className="label">Куда</div>
          <div className="input-window">
            <input type="text" placeholder="Город прилёта"></input>
          </div>
        </div>
        <div className="input-block">
          <div className="label">Туда</div>
          <div className="input-window">
            <img width="16" src={calendar_1} alt="Calendar grey" />
            <input type="text" placeholder="дд.мм.гг"></input>
          </div>
        </div>
        <div className="input-block">
          <div className="label">Обратно</div>
          <div className="input-window">
            <img width="16" src={calendar_1} alt="Calendar grey" />
            <input type="text" placeholder="дд.мм.гг"></input>
          </div>
        </div>
      </div>
      <div className="button-block">
        <div className="button">
          <p>Найти билеты</p>
        </div>
      </div>
    </div>
  );
};

export default Avia;
