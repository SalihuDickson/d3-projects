import React from "react";
import useRandomColor from "./hooks/useRandomColor";

const Data = ({ data, xScale, yScale, xValue, yValue, toolTipFormat }) => {
  const randomColor = useRandomColor();

  randomColor();

  return data.map((d) => (
    <rect
      className="mark"
      key={d.Country}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
      fill={`${randomColor()}`}
    >
      <title>{toolTipFormat(xValue(d))}</title>
    </rect>
  ));
};

export default Data;
