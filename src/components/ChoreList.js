import React from "react";
import { ListGroup } from "react-bootstrap";

const ChoreList = ({ chores, category, completeChore }) => {
  const filteredChores = chores.filter((chore) => chore.category === category);

  const handleCheckboxChange = (chore) => {
    completeChore(chore);
  };

  return (
    <ListGroup>
      {filteredChores.map((chore) => (
        <ListGroup.Item key={chore.chore}>
          {chore.chore} - Value: {chore.value}{" "}
          <span className="float-right">
            <label className="mr-2">Done</label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(chore)}
            />
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChoreList;
