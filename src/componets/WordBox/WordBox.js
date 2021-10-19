import PropType from "prop-types";
import "./WordBox.css";

const WordBox = ({ word }) => {
  return <div className="word-box__letter">{word}</div>;
};

WordBox.propType = {
  letter: PropType.string.isRequired,
};

export default WordBox;
