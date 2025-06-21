// PrevArrow.jsx

import { GrPrevious } from "react-icons/gr";

const PrevArrow = ({ onClick, isVisible }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 left-4 transform -translate-y-1/2
      text-white text-3xl leading-none
      transition-opacity duration-200
      ${isVisible ? "opacity-100" : "opacity-0"}
      z-20
    `}
  >
    <GrPrevious className="text-4xl"/>
  </button>
);

export default PrevArrow;
