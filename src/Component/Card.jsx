import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span></span>
        <p>{props?.selectedHoliday?.description}</p>
        <span></span>
        <p>{props?.selectedHoliday?.date?.iso}</p>
      </div>
    </div>
  );
};

export default Card;
