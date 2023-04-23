import React from "react";
import { Typography } from "@mui/material";

const ChoreLegend = ({ chores }) => {
  const categories = [...new Set(chores.map((chore) => chore.category))];

  return (
    <div>
      <Typography variant="h6">Chore Categories</Typography>
      {categories.map((category) => (
        <Typography key={category} variant="body1">
          Category {category}: {chores.filter((chore) => chore.category === category).length} Chores
        </Typography>
      ))}
    </div>
  );
};

export default ChoreLegend;
