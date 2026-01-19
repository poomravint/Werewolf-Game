import { useState, useEffect } from "react";
import "./Namebox.css";

const Namebox = ({ Groupname, setGroupName }) => {
  const [name, setName] = useState("");
  const [deletingIndex, setdeletingIndex] = useState(null);

  const handleAddName = () => {
    if (name.trim() !== "") {
      setGroupName([...Groupname, name]);
      setName("");
    }
  };

  const handleDelete = (indextoDel) => {
    setdeletingIndex(indextoDel);

    setTimeout(() => {
      const updateGroup = Groupname.filter((_, index) => index != indextoDel);
      setGroupName(updateGroup);

      setdeletingIndex(null);
    }, 300);
  };

  useEffect(() => {
    if (Groupname.length >= 10) {
      alert("more than 10 players in this game");
    }
  }, [Groupname.length]); // เฝ้าดูแค่ "จำนวน" ผู้เล่น

  return (
    <>
      <div className="Box-container">
        <div className="Input-box">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleAddName}>Add</button>
        </div>
        <div className="Member-table">
          <p>
            Member list : <strong>{Groupname.length}</strong>
          </p>
          <ul>
            {Groupname.map((member, index) => (
              <li
                key={index}
                className={`member-item ${
                  deletingIndex === index ? "fade-out" : ""
                }`}
              >
                <span style={{}}>{member}</span>
                <button onClick={() => handleDelete(index)}>Del</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Namebox;
