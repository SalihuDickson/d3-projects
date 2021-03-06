import React from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const useData = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const row = (d) => {
      const noSpace = d["2020"].replace(/\s+/g, "");
      d.Population = +noSpace * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  return data;
};

export default useData;
