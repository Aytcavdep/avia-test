import React from "react";
import "../scss/components/_aviaForm.scss";
import Input from "../components/Input";

const Avia: React.FC = () => {
  return (
    <div className="aviaform-board">
      <div className="form">
        <Input label="Откуда" placeholder="Город вылета" />
        <Input label="Туда" placeholder="Город прилёта" />
        <Input label="Туда" placeholder="дд.мм.гг" type="date" />
        <Input label="Обратно" placeholder="дд.мм.гг" type="date" />
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
