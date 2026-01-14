import "./Showmatching.css";
import "./Rolebox.css";
import { rolecolor } from "./roleUtils";

const Card = ({ name, role, isOpen, onClick }) => {
  const roleClassMap = {
    Werewolf: "role-bad",
    Villager: "role-good",
    Seer: "role-good",
    Joker: "role-special",
  };
  return (
    <div className="card" onClick={onClick}>
      <div className={`card-inner ${isOpen ? "flipped" : ""}`}>
        <div className="card-front">
          <h3>{name}</h3>
          <p>Click to reveal</p>
        </div>

        <div className={`card-back ${rolecolor(role)}`}>
          <h3>{role}</h3>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
