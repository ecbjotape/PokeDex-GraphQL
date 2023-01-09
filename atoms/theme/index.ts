import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isDarkTheme = atom({
  key: "theme",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
