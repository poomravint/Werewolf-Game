import { useState } from "react";

const MatchingRandom = ({ Groupname, GroupRole, setResult }) => {
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const handlematching = () => {
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
  };

  return (
    <>
      <button onClick={handlematching}>Random</button>
    </>
  );
};

export default MatchingRandom;
