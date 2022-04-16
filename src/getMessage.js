import { csvFormat } from "d3";

export const getMessage = (data) => {
  let message = "";

  message = message + Math.round(csvFormat(data).length / 1024) + "kb";
  message = message + data.length + "rows";
  message = message + data.columns.length + "columns";

  return message;
};
