import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DieRoll = ({ setCategory }) => {
  const [rolledValue, setRolledValue] = useState(null);

  const rollDie = () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    setRolledValue(roll);
    setCategory(
      roll <= 5 ? 1 : roll <= 10 ? 2 : roll <= 15 ? 3 : 4
    );
  };

  return (
    <div>
      <Button onClick={rollDie}>Roll d-20</Button>
      {rolledValue && <p>You rolled: {rolledValue}</p>}
    </div>
  );
};

export default DieRoll;
