import { atom } from "recoil";

export const counterAtom = atom({
  key: "counterAtom",  // Unique key
  default: 0,          // Default value
});