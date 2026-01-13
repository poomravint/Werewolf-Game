import { useState } from "react";
import "./Rolebox.css"

const Rolebox = ({ Grouprole, setGroupRole }) => {
  const [role, setRole] = useState("");
  const roleOptions = ["Villager", "Werewolf", "Seer"];

  return (
    <>
      <div className="Box-container">
        <p>Role box</p>
        <select className = "Select-box" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roleOptions.map((r, index) => (
            <option key={index} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Rolebox;
