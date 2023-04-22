import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const ChoreInputForm = ({ addChore }) => {
  const [chore, setChore] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addChore({ chore, value, category });
    setChore("");
    setValue(0);
    setCategory(1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Chore"
            value={chore}
            onChange={(e) => setChore(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
        </Col>
        <Col>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(parseInt(e.target.value))}
          >
            <option value={1}>1-5</option>
            <option value={2}>6-10</option>
            <option value={3}>11-15</option>
            <option value={4}>16-20</option>
          </Form.Control>
        </Col>
        <Col>
          <Button type="submit">Add Chore</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ChoreInputForm;
