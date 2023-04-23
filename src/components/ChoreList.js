import React from "react";
import { List, Checkbox } from "antd";

const ChoreList = ({ chores, toggleChore }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={chores}
      renderItem={(chore, index) => (
        <List.Item>
          <Checkbox
            checked={chore.done}
            onChange={() => toggleChore(index)}
          />
          {chore.name} ({chore.value}) - {chore.category}
        </List.Item>
      )}
    />
  );
};

export default ChoreList;
