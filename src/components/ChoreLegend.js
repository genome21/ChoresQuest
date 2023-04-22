import React from "react";
import { ListGroup } from "react-bootstrap";

const ChoreLegend = ({ chores }) => {
  return (
    <div>
      <h3>All Chores</h3>
      <ListGroup>
        {chores.map((chore) => (
          <ListGroup.Item key={chore.chore}>
            {chore.chore} - Category: {chore.category} - Value: {chore.value}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ChoreLegend;
