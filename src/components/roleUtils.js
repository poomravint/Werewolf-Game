export const roleClassMap = {
  Werewolf: "role-bad",
  Villager: "role-good",
  Seer: "role-good",
  Joker: "role-special",
  Detective: "role-good",
  Gaurd: "role-good",
  Hunter: "role-good",
  Sheriff: "role-good",
  Wolfcub: "role-bad",
  Cupid: "role-good",
  Strongman: "role-good",
  Silent: "role-good",
  Priest: "role-good",
  Nakron_guy: "role-good",
  Serial_killer: "role-special",
  Wolf_Hunter: "role-good",
  Wolf_Witch: "role-bad",
  Wolf_Leader: "role-bad",
};

export const rolecolor = (role) => {
  return roleClassMap[role];
};
