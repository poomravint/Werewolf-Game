import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Namebox from "./components/Namebox.jsx";
import Rolebox from "./components/Rolebox.jsx";
import MatchingRandom from "./components/MatchingRandom.jsx";
import Showmatching from "./components/Showmatching.jsx";

function App() {
  const [Groupname, setGroupName] = useState([]);
  const [Grouprole, setGroupRole] = useState([]);
  const [Result, setResult] = useState([]);
  return (
    <>
      <h1>Wherewolf Game</h1>
      <div className="Showbox">
        <Namebox Groupname={Groupname} setGroupName={setGroupName} />
        <Rolebox Grouprole={Grouprole} setGroupRole={setGroupRole} />
      </div>
      <MatchingRandom
        Groupname={Groupname}
        GroupRole={Grouprole}
        setResult={setResult}
      />
      <div>
        <Showmatching Result={Result}/>
      </div>
    </>
  );
}

export default App;
