export type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

const ROLES = {
  owner: ["view:worker", "create:worker", "view:schedule", "view:outlet"],
  manager: [
    "view:worker",
    "create:worker",
    "view:schedule",
    "create:schedule",
    "create:outlet",
    "view:outlet",
  ],
  cashier: [],
} as const;

export function hasPermission(role: Role, permission: Permission) {
  return (ROLES[role] as readonly Permission[]).includes(permission);
}
