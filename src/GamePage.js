import React, { useState } from "react";
import { Button, Row, Col, Card } from "antd";
import DieRoll from "./components/DieRoll";
// import category from "./components/DieRoll";
import Monster from "./components/Monster";
import ChoreList from "./components/ChoreList";
import ChoreInputForm from "./components/ChoreInputForm";
import handleAddChore from "./components/ChoreInputForm";
import handleRemoveChore from "./components/ChoreList";
import "./GamePage.css";
// import ChoreLegend from "./components/ChoreLegend";

function GamePage({ chores, monsterHealth, handleMonsterDamage, handleResetGame }) {
  const [selectedChore, setSelectedChore] = useState(null);

  const handleChoreSelect = (chore) => {
    setSelectedChore(chore);
  };

  const handleChoreComplete = () => {
    handleMonsterDamage(selectedChore.value);
    setSelectedChore(null);
  }

    return (
        <div className="game-page">
            <Row>
                <Col span={12}>
                    <Card title="Monster" className="monster-card">
                        <Monster health={monsterHealth} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Chores" className="chores-card">
                        <ChoreList chores={chores} toggleChore={handleChoreSelect} />
                    </Card>
                    <Card title="Chore Management" className="chore-management-card">
                        <ChoreInputForm addChore={handleAddChore} />
                        <ChoreList chores={chores} deleteChore={handleRemoveChore} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Card title="Dice Roll" className="dice-card">
                        <DieRoll />
                    </Card>
                </Col>
                {/* <Col span={12}>
                    <Card title="Chore Category" className="category-card">
                        <ChoreLegend />
                    </Card>
                </Col> */}
            </Row>
            <Row>
                <Col span={24}>
                    <Button type="primary" onClick={handleChoreComplete} disabled={!selectedChore}>Complete Chore</Button>
                    <Button type="primary" onClick={handleResetGame}>Reset Game</Button>
                </Col>
            </Row>
        </div>
    );
}

export default GamePage;