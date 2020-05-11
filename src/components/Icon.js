import React from "react";
import "./../style.css";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

let Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
};
export default Icon;
