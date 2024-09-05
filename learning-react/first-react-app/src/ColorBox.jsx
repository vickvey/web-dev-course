import PropTypes from "prop-types";
import { useState } from "react";

export default function ColorBox({ colors }) {
  const LENGTH = colors.length;

  const getRandomColorIndex = () => {
    const num = Math.floor(Math.random() * LENGTH);
    return num;
  };

  const [color, setColor] = useState(getRandomColorIndex());

  const changeColor = () => {
    setColor(getRandomColorIndex());
  };

  const style = {
    backgroundColor: colors[color],
    width: "100px",
    height: "100px"
  };

  return <div className="ColorBox" style={style} onClick={changeColor}></div>;
}

// Define PropTypes
ColorBox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
