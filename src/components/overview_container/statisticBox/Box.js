import React from "react";
import "./box.css"

function Box(props) {
  return (
    <div className={`statistic_box ${props.type}`}>
      <div className="statistic_box--name">{props.name}</div>
      <div className="statistic_box--counter">{props.counter}</div>
    </div>
  );
}

export default Box;
