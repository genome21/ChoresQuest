import React from "react";
import { Typography, LinearProgress } from "@mui/material";

const MonsterHealth = ({ health }) => {
  const normalizedHealth = Math.max(0, Math.min(100, health));

  return (
    <div>
      <Typography variant="h6">Monster Health: {normalizedHealth}</Typography>
      <LinearProgress variant="determinate" value={normalizedHealth} />
    </div>
  );
};

export default MonsterHealth;
