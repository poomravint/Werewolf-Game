import "./Showmatching.css";

const Card = ({ name, role, isOpen, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-inner" >
        

        {!isOpen && (
          <div className="card-font">
            <h3>{name}</h3>
            <p>Click to reveal</p>
          </div>
        )}

        {isOpen && (
          <div className="card-back">
            <h3>{role}</h3>
            <h4>({name})</h4>
            <p>Click to close</p>
          </div>
        )}


      </div>
    </div>
  );
};

export default Card;
