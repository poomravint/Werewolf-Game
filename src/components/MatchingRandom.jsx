import { useState } from "react";

const MatchingRandom = ({
  Groupname,
  GroupRole,
  setResult,
  setShowdmbutton,
}) => {
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const handlematching = () => {
    if (Groupname.length === 0 && GroupRole.length === 0) {
      alert("Please add Member and Role");
      return;
    }

    if (Groupname.length !== GroupRole.length) {
      alert("Member and Role doesn't matching");
      return;
    }
    const shuffledRoles = shuffle(GroupRole);
    const matched = Groupname.map((name, index) => ({
      name,
      role: shuffledRoles[index],
    }));
    setResult(matched);
    setShowdmbutton(true); //? Show Hide/Show Role button
  };

  return (
    <>
      <button
        onClick={handlematching}
        style={{
          backgroundColor: "#6374d4 ",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Random
      </button>
    </>
  );
};

export default MatchingRandom;
