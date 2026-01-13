import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Namebox from "./components/Namebox.jsx";
import Rolebox from "./components/Rolebox.jsx";

function App() {
  const [Groupname, setGroupName] = useState([]);
  const [Grouprole, setGroupRole] = useState([]);
  return (
    <>
      <h1>Wherewolf Game</h1>
      <div className="Showbox">
        <Namebox Groupname={Groupname} setGroupName={setGroupName} />
        <Rolebox Grouprole={Grouprole} setGroupRole={setGroupRole} />
      </div>
    </>
  );
}

export default App;
