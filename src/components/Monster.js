import React from "react";
import "./Monster.css";
import { Progress, Image } from "antd";
import dragon from "../assets/dragon.png";

const Monster = ({ health, shake }) => {
  const progressColor =
    health > 75
      ? "#52c41a"
      : health > 50
      ? "#faad14"
      : health > 25
      ? "#f5222d"
      : "#9e1068";

  return (
    <div className="monster">
      <Image
        src={dragon}
        alt="Dragon"
        preview={false}
        className={`monster-image ${shake ? "shake" : ""}`}
      />
      <div className="monster-health">
        <Progress
          type="circle"
          percent={health}
          width={80}
          strokeColor={progressColor}
          format={(percent) => `${percent}`}
        />
      </div>
    </div>
  );
};

export default Monster;
