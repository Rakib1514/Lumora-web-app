// NextArrow.jsx
import React from "react";
import { GrNext } from "react-icons/gr";

const NextArrow = ({ onClick, isVisible }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 right-4 transform -translate-y-1/2
      text-white  leading-none
      transition-opacity duration-200
      ${isVisible ? "opacity-100" : "opacity-0"}
      z-20
    `}
  >
    <GrNext className="text-4xl"/>

  </button>
);

export default NextArrow;
