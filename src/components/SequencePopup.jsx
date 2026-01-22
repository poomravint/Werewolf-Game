import { useState } from "react";
import "./RolePopup.css";
import { ROLE_SEQUENCE } from "./roleUtils";
import { getRoleClass } from "./roleUtils";
import { getRoleAbility } from "./roleUtils";
import { getThaiName } from "./roleUtils";

const SequencePopup = ({ onClose, result }) => {
  // console.log(result);
  //* Map only role from result(in result has name and role)
  const rolesInGame = result.map((player) => player.role);
  //* Sorted by Sequence
  const sequenceToShow = ROLE_SEQUENCE.filter((item) =>
    rolesInGame.includes(item.role),
  );

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>🐺 Role Sequence</h2>
        <table className="role-Table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Ability</th>
            </tr>
          </thead>
          <tbody>
            {sequenceToShow.map((item, index) => (
              <tr key={index}>
                <td className={`${getRoleClass(item.role)}`}><strong>{item.role}</strong><br />({getThaiName(item.role)})</td>
                <td className={`ability-cell ${getRoleClass(item.role)}`}>{item.ability}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SequencePopup;
