import React from "react";

const char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const randomColor = () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomChar = Math.floor(Math.random() * 16);
    const colorChar = char[randomChar];

    randomColor += colorChar;
  }

  return randomColor;
};

const useRandomColor = () => randomColor;

export default useRandomColor;
