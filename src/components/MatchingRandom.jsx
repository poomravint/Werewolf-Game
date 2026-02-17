import { useState } from "react";

import { roles } from "./roleUtils";

const MatchingRandom = ({
  Groupname,
  GroupRole,
  setResult,
  setShowdmbutton,
}) => {
  const totalScore = GroupRole.reduce((sum, roleName) => {
    const roleData = roles[roleName];
    return sum + (roleData ? roleData.roleValue : 0);
  }, 0);

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
      <p>
      Balance Score:{" "}
        <strong style={{ color: totalScore < 0 ? "red" : "green" }}>
          {totalScore}
        </strong>
      </p>
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
