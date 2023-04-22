import React from "react";
import { ProgressBar } from "react-bootstrap";

const MonsterHealth = ({ health }) => {
  return (
    <div>
      <h4>Monster Health</h4>
      <ProgressBar
        now={health}
        max={100}
        label={`${health}/100`}
        variant={health > 50 ? "success" : health > 20 ? "warning" : "danger"}
      />
    </div>
  );
};

export default MonsterHealth;
