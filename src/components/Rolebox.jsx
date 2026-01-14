import { useState } from "react";
import "./Rolebox.css";
import { roleClassMap } from "./roleUtils";

const Rolebox = ({ Grouprole, setGroupRole }) => {
  const [role, setRole] = useState("");
  const [deletingIndex, setdeletingIndex] = useState(null);

  const roleOptions = ["Villager", "Werewolf", "Seer", "Joker"];

  const rolecolor = (role) =>
  {
    return roleClassMap[role];
  }

  const handleAddRole = () => {
    if (role.trim() !== "") {
      setGroupRole([...Grouprole, role]);
      setRole("");
    }
  };

  const handleDelete = (indextoDel) => {
    setdeletingIndex(indextoDel);
    setTimeout(() => {
      const updateGroup = Grouprole.filter((_, index) => index != indextoDel);
      setGroupRole(updateGroup);
      setdeletingIndex(null);
    }, 300);
  };

  return (
    <>
      <div className="Box-container">
        <div className="Input-box">
          <select
            className="select-box"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Select Role --</option>
            {roleOptions.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </select>
          <button onClick={handleAddRole}>Add</button>
        </div>
        <p>
          Role list : <strong>{Grouprole.length}</strong>
        </p>

        <div className="RoleTable">
          <ul>
            {Grouprole.map((member, index) => (
              <li
                key={index}
                className={`member-item ${rolecolor(member)}${
                  deletingIndex === index ? "fade-out" : ""
                }`}
              >
                <span>{member}</span>
                <button onClick={() => handleDelete(index)}>Del</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rolebox;
