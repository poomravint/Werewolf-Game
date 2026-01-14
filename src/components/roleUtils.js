export const roleClassMap = {
  Werewolf: "role-bad",
  Villager: "role-good",
  Seer: "role-good",
  Joker: "role-special",
};

export const rolecolor = (role) => {
  return roleClassMap[role];
};
