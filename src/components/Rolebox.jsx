import { useState } from "react";
import "./Rolebox.css";
import { roles } from "./roleUtils";
import { getRoleClass } from "./roleUtils";

const Rolebox = ({ Grouprole, setGroupRole }) => {
  const [role, setRole] = useState("");
  const [deletingIndex, setdeletingIndex] = useState(null);

  //* Fetch all role from Roles
  const roleOptions = Object.keys(roles);

  const handleAddRole = () => {
    if (role.trim() !== "") {
      setGroupRole([...Grouprole, role]);
      setRole("");
    }
  };

  const totalScore = Grouprole.reduce((sum, roleName) => {
    return sum + (roles[roleName]?.roleValue || 0);
  }, 0);

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
            {Object.entries(roles).map(([roleKey, roleData]) => (
              <option key={roleKey} value={roleKey}>
                {roleData.roleValue > 0 ? `\u00A0${roleData.roleValue}` : `${roleData.roleValue}`} | {roleKey}
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
                className={`member-item ${getRoleClass(member)} ${
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
