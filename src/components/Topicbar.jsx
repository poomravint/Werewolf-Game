import { useState } from "react";
import wolficon from "../assets/wolficon.png";
import "./Topicbar.css";
import RolePopup from "./rolePopup";

const Topicbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topicbar">
        <h1>Wherewolf Game</h1>
        <img
          src={wolficon}
          alt="wolf"
          className="wolf-icon"
          onClick={() => setOpen(true)}
        />
      </div>

      {open && <RolePopup onClose={() => setOpen(false)} />}
    </>
  );
};

export default Topicbar;
