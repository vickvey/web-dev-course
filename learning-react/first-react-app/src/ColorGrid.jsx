import PropTypes from "prop-types";
import ColorBox from "./ColorBox";
import "./ColorGrid.css";

export default function ColorGrid({colors}) {
  const boxCount = 25;
  const boxes = Array.from({ length: boxCount }, (_, index) => index);

  return (
    <div className="ColorGrid">
      {boxes.map((_, index) => (
        <ColorBox key={index} colors={colors} />
      ))}
    </div>
  );
}

ColorBox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
