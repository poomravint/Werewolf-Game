import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topicbar from "./components/Topicbar.jsx";
import Namebox from "./components/Namebox.jsx";
import Rolebox from "./components/Rolebox.jsx";
import MatchingRandom from "./components/MatchingRandom.jsx";
import Showmatching from "./components/Showmatching.jsx";
import Dmbox from "./components/Dmbox.jsx";

function App() {
  const [Groupname, setGroupName] = useState([]);
  const [Grouprole, setGroupRole] = useState([]);
  const [Result, setResult] = useState([]);
  const [showdmbutton, setShowdmbutton] = useState(false);

  return (
    <>
      <Topicbar/>
      <div className="Showbox">
        <Namebox Groupname={Groupname} setGroupName={setGroupName} />
        <Rolebox Grouprole={Grouprole} setGroupRole={setGroupRole} />
      </div>
      <MatchingRandom
        Groupname={Groupname}
        GroupRole={Grouprole}
        setResult={setResult}
        setShowdmbutton={setShowdmbutton}
      />
      <div>
        <Showmatching Result={Result} />
      </div>
      <div>
        <Dmbox result={Result}  showdmbutton={showdmbutton}/>
      </div>
    </>
  );
}

export default App;
