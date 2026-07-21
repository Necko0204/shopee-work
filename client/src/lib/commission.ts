import type { UserLevel } from "../types";

export const commissionPercentByLevel: Record<UserLevel, number> = {
  STARTER: 15,
  SILVER: 25,
  GOLD: 25,
  VIP: 30,
  VVIP: 30,
};

export const levelLabelByLevel: Record<UserLevel, string> = {
  STARTER: "Classic",
  SILVER: "VIP",
  GOLD: "VIP",
  VIP: "VVIP",
  VVIP: "VVIP",
};

export function normalizeMembershipLevel(level: UserLevel | string): UserLevel {
  if (level === "VVIP" || level === "VIP") return "VIP";
  if (level === "GOLD" || level === "SILVER") return "SILVER";
  return "STARTER";
}

export function calculateCommission(price: number, level: UserLevel | string) {
  return Math.floor((price * commissionPercent(level)) / 100);
}

export function commissionPercent(level: UserLevel | string) {
  return commissionPercentByLevel[normalizeMembershipLevel(level)];
}

export function membershipLabel(level: UserLevel | string) {
  const normalized = normalizeMembershipLevel(level);
  return `${levelLabelByLevel[normalized]} · ${commissionPercentByLevel[normalized]}%`;
}
