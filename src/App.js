import React from "react";
import { max, scaleBand, scaleLinear, format } from "d3";
import useData from "./hooks/useData";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Data from "./Data";

const height = 500;
let width = 900;

const App = () => {
  const data = useData();

  const margin = { top: 2, bottom: 20, left: 250, right: 10 };

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;
  const xAxisLabelOffset = 70;

  const si2Format = format(".2s");
  const si3Format = format(".3s");
  const xAxisTickFormat = (n) => si2Format(n).replace("G", "B");
  const toolTipFormat = (n) => si3Format(n).replace("G", "B");

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.12);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height + 100}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />

        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <Data
          data={data}
          xScale={xScale}
          yScale={yScale}
          yValue={yValue}
          xValue={xValue}
          toolTipFormat={toolTipFormat}
        />
      </g>
    </svg>
  );
};

export default App;
