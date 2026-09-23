import { cycleA } from "./cycle-a.js";

export function cycleB(): string {
  return typeof cycleA === "function" ? "B" : "unreachable";
}
