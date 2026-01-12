import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Namebox from "./components/Namebox.jsx";

function App() {
  const [Groupname, setGroupName] = useState([]);
  return (
    <>
      <h1>Wherewolf Game</h1>
      <Namebox Groupname={Groupname} setGroupName={setGroupName} />
    </>
  );
}

export default App;
