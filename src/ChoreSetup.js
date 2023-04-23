import React from "react";
import ChoreInputForm from "./ChoreInputForm";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const ChoreSetup = ({ addChore, chores, deleteChore }) => {
  return (
    <div>
      <h1>Chore Setup</h1>
      <ChoreInputForm addChore={addChore} />
      {/* Add the code to display chores list, their categories, and values */}
      {/* Add the code to delete chores and reset monster health */}
      <Link to="/">Back to Game</Link>
    </div>
  );
};

export default ChoreSetup;
