import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <ul>
          <li>{props?.selectedHoliday?.name}</li>
          <li>{props?.selectedHoliday?.description}</li>
          <li>{props?.selectedHoliday?.date?.iso}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
