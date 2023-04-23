import React from "react";
import { Button } from "@mui/material";

const DieRoll = ({ setCategory }) => {
  const handleClick = () => {
    const category = Math.ceil(Math.random() * 20);
    setCategory(category);
  };

  return (
    <Button onClick={handleClick} variant="contained" fullWidth>
      Roll Die
    </Button>
  );
};

export default DieRoll;
