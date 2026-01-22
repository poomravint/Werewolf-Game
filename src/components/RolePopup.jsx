import "./RolePopup.css";
import { roles } from "./roleUtils";
import { getRoleClass } from "./roleUtils";
import { getRoleAbility } from "./roleUtils";
import { getThaiName } from "./roleUtils";



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
            {Object.keys(roles).map((role) => (
              <tr key={role}>
          
                <td className={`${getRoleClass(role)}`}><strong>{role}</strong><br />({getThaiName(role)})</td>
                <td className={`ability-cell ${getRoleClass(role)}`}>{getRoleAbility(role)}</td>
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
