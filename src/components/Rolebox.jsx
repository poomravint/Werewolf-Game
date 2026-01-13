import { useState } from "react";

const Rolebox = ({ Grouprole, setGroupRole }) => {

const [role, setRole] = useState("");

  return (
    <>
      <div className="Box-container">
        <p>Role box</p>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          <option value="Villager">Villager</option>
          <option value="Werewolf">Werewolf</option>
          <option value="Seer">Seer</option>
        </select>
      </div>
    </>
  );
};

export default Rolebox;
