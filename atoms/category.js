import { atom } from "recoil";

export const selectedCategoryAtom = atom({
  key: "selectedCategory",
  default: "fashion",
});
