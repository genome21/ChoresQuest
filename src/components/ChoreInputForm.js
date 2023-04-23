import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const ChoreInputForm = ({ addChore }) => {
  const [chore, setChore] = useState("");
  const [value, setValue] = useState(1);
  const [category, setCategory] = useState("Fire");

  const handleSubmit = (e) => {
    e.preventDefault();
    addChore(chore, value, category);
    setChore("");
    setValue(1);
    setCategory("Fire");
  };

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Chore"
          value={chore}
          onChange={(e) => setChore(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={category}
          style={{ width: 120 }}
          onChange={(value) => setCategory(value)}
        >
          {/* Add all categories as options here */}
          <Option value="Fire">Fire</Option>
          <Option value="Poison">Poison</Option>
          {/* ... */}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Chore
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChoreInputForm;
