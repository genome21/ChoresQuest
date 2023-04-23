import React from "react";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ChoreList = ({ chores, category, completeChore, selectedChore, setSelectedChore }) => {
  const filteredChores = chores.filter((chore) => chore.category === category);

  return (
    <List>
      {filteredChores.map((chore, index) => (
        <ListItem key={index}>
          <ListItemText primary={chore.chore} secondary={`Value: ${chore.value}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => setSelectedChore(chore)}>
              <CheckIcon />
            </IconButton>
            <Checkbox
              edge="end"
              checked={selectedChore === chore}
              onChange={() => {
                setSelectedChore(chore);
                completeChore(chore);
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ChoreList;
