import React, { useState } from "react";
import "./App.css";
import ChoreInputForm from "./components/ChoreInputForm";
import ChoreList from "./components/ChoreList";
import Monster from "./components/Monster";
import { Button, Row, Col } from "antd";
import { ReloadOutlined, SyncOutlined } from "@ant-design/icons";

const App = () => {
  const [chores, setChores] = useState([]);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [shake, setShake] = useState(false);

  const addChore = (name, value, category) => {
    setChores([...chores, { name, value, category, done: false }]);
  };

  const toggleChore = (index) => {
    const newChores = [...chores];
    newChores[index].done = !newChores[index].done;

    if (newChores[index].done) {
      setMonsterHealth(monsterHealth - newChores[index].value);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setMonsterHealth(monsterHealth + newChores[index].value);
    }

    setChores(newChores);
  };

  const resetChores = () => {
    setChores([]);
  };

  const resetMonster = () => {
    setMonsterHealth(100);
  };

  return (
    <div className="App">
      <Row>
        <Col span={12}>
          <ChoreInputForm addChore={addChore} />
          <ChoreList chores={chores} toggleChore={toggleChore} />
          <Button type="primary" icon={<SyncOutlined />} onClick={resetChores}>
            Reset Chores
          </Button>
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={resetMonster}
          >
            Reset Monster
          </Button>
        </Col>
        <Col span={12}>
          <Monster health={monsterHealth} shake={shake} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
