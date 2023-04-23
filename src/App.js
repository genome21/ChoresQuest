import React, { useState } from "react";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChoreInputForm from "./ChoreInputForm";
import ChoreList from "./ChoreList";
import DieRoller from "./DieRoller";
import Monster from "./Monster";
import "./App.css";
import ChoreSetup from "./ChoreSetup";

function App() {
  const [chores, setChores] = useState([]);
  const [monsterHealth, setMonsterHealth] = useState(100);

  const addChore = (chore) => {
    setChores([...chores, chore]);
  };

  const deleteChore = (choreToDelete) => {
    setChores(chores.filter((chore) => chore !== choreToDelete));
  };

  const damageMonster = (damage) => {
    setMonsterHealth((prevHealth) => Math.max(prevHealth - damage, 0));
  };

  const gameWon = monsterHealth === 0;

  return (
    <Router>
      <div className="App">
        <Container maxWidth="md">
          <Switch>
            <Route path="/setup">
              <ChoreSetup
                addChore={addChore}
                chores={chores}
                deleteChore={deleteChore}
              />
            </Route>
            <Route path="/">
              <h1>Chore Quest</h1>
              <Link to="/setup">Setup Chores</Link>
              <DieRoller
                categories={categories}
                roll={roll}
                chores={chores}
                onChoreCompleted={damageMonster}
              />
              <Monster health={monsterHealth} gameWon={gameWon} />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
