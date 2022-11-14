import React from 'react'
import "./boxchart.css"

function BoxChart(props) {
  return (
    <div className="box_chart">
      <div className="box_chart--name">{props.name}</div>
      <div className="box_chart--value">{props.value}</div>
    </div>
  );
}

export default BoxChart