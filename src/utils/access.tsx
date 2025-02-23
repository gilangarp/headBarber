export const isOwner = (role: string) => {
  return role === "owner";
};

export const isOwnerOrManager = (role: string) => {
  return role === "owner" || role === "manager";
};

export const isManager = (role: string) => {
  return role === "manager";
};
