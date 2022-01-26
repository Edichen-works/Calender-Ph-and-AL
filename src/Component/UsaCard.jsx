import React from "react";
import "./card.css";

const UsaCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span></span>
        <p>{props?.selecetedHol?.description}</p>
        <span></span>
        <p>{props?.selecetedHol?.date?.iso}</p>
      </div>
    </div>
  );
};

export default UsaCard;
