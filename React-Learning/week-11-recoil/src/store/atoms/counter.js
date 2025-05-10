import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counterAtom",  // Unique key
  default: 0,          // Default value
});

export const evenSelector = selector({
   key: "isEvenSelector",
   get: function({ get }) {
          const currentCount = get(counterAtom);
          const isEven = (currentCount % 2 == 0);
          return isEven;
   }
})