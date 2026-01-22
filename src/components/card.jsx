import "./Showmatching.css";
import "./Rolebox.css";
import { getRoleClass } from "./roleUtils";
import { getThaiName } from "./roleUtils";

const Card = ({ name, role, isOpen, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className={`card-inner ${isOpen ? "flipped" : ""}`}>
        <div className="card-front">
          <h3>{name}</h3>
          <h5></h5>
          <p>Click to reveal</p>
        </div>

        <div className={`card-back ${getRoleClass(role)}`}>
          <div className="role-info">
            <h3>{role}</h3>
            <h5>({getThaiName(role)})</h5>
          </div>
          <div className="player-name">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
