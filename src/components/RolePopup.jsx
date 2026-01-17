import "./RolePopup.css";
import { rolecolor } from "./roleUtils";
import { roleClassMap } from "./roleUtils";
import { roleAbility } from "./roleUtils";

const RolePopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>🐺 Wherewolf Game</h2>

        <table className="role-Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ability</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(roleClassMap).map((role) => (
              <tr key={role}>
          
                <td className={`${rolecolor(role)}`}><strong>{role}</strong></td>
                <td className={`ability-cell ${rolecolor(role)}`}>{roleAbility(role)}</td>
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

export default RolePopup;
