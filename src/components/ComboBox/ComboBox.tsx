import React from "react";
import "@styles/ComboBox/ComboBox.css";
import downArrowSvg from "@public/down-arrow.svg";
import sword from "@public/sword.svg";

const ComboBox: React.FC = () => {
  return (
    <div className="combobox">
      <div>
        <img src={sword} alt="Sword" className="sword-icon" />
        <span>Select a game</span>
      </div>
      <div>
        <img src={downArrowSvg} alt="Arrow" className="down-arrow-icon" />
      </div>
    </div>
  );
};

export default ComboBox;
