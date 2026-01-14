import { useState } from "react";
import Card from "./card.jsx";
import "./Showmatching.css";

const Showmatching = ({ Result }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="card-container">
      {Result.map(({ name, role }, index) => (
        <Card
          key={index}
          name={name}
          role={role}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Showmatching;
