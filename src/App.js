import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import GamePage from "./GamePage";
import ChoreInputForm from "./components/ChoreInputForm";
import ChoreList from "./components/ChoreList";
//import NavBar from "./components/NavBar";

const { Header, Content } = Layout;

function App() {
  const [chores, setChores] = useState([]);
  const [monsterHealth, setMonsterHealth] = useState(100);

  useEffect(() => {
    const storedChores = localStorage.getItem("chores");
    if (storedChores) {
      setChores(JSON.parse(storedChores));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chores", JSON.stringify(chores));
  }, [chores]);

  const handleAddChore = (chore) => {
    setChores([...chores, chore]);
  };

  const handleRemoveChore = (index) => {
    const newChores = [...chores];
    newChores.splice(index, 1);
    setChores(newChores);
  };

  const handleMonsterDamage = (damage) => {
    setMonsterHealth((prevHealth) => prevHealth - damage);
  };

  const handleResetGame = () => {
    setMonsterHealth(100);
  };

  return (
    <Router>
      <Layout>
        <Header>
          {/* <NavBar /> */}
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <GamePage
                chores={chores}
                monsterHealth={monsterHealth}
                handleMonsterDamage={handleMonsterDamage}
                handleResetGame={handleResetGame}
              />
            </Route>
            <Route path="/chore-setup">
              <ChoreInputForm handleAddChore={handleAddChore} />
              <ChoreList chores={chores} handleRemoveChore={handleRemoveChore} />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
