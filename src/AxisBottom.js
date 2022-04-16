import React from "react";

const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)}, 0)`}
    >
      <line y2={innerHeight - 3} stroke="black" />
      <text style={{ textAnchor: "middle" }} dy=".8em" y={innerHeight}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
export default AxisBottom;
