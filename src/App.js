import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChoreInputForm from "./components/ChoreInputForm";
import ChoreList from "./components/ChoreList";
import DieRoll from "./components/DieRoll";
import MonsterHealth from "./components/MonsterHealth";
import ChoreLegend from "./components/ChoreLegend";
import ChoreExportImport from "./components/ChoreExportImport";
import { Button } from "react-bootstrap";

const App = () => {
  const [chores, setChores] = useState([]);
  const [category, setCategory] = useState(null);
  const [monsterHealth, setMonsterHealth] = useState(100);

  const addChore = (chore) => {
    setChores([...chores, chore]);
  };

  const completeChore = (chore) => {
    setMonsterHealth(monsterHealth - chore.value);
  };
  

  const clearChores = () => {
    setChores([]);
  };

  const resetMonsterHealth = () => {
    setMonsterHealth(100);
  };

  const importChores = (data) => {
    setChores(data);
  };

  return (
    <div className="container">
      <h1>ChoreQuest</h1>
      <ChoreInputForm addChore={addChore} />
      <DieRoll setCategory={setCategory} />
      {category && (
        <div>
          <h3>Category {category}</h3>
          <ChoreList
            chores={chores}
            category={category}
            completeChore={completeChore}
          />
        </div>
      )}
      <MonsterHealth health={monsterHealth} />
      <ChoreLegend chores={chores} />
<Button onClick={clearChores} className="mr-2">Clear Chores</Button>
<Button onClick={resetMonsterHealth} className="mr-2">Reset Monster Health</Button>
<ChoreExportImport chores={chores} importChores={importChores} />
</div>
);
};

export default App;

