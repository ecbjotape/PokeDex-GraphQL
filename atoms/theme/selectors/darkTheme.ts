import { selector } from "recoil";

import { isDarkTheme as theme } from "../index";

export const isDarkTheme = selector({
  key: "isDarkTheme",
  get: ({ get }) => {
    const isDark = get(theme);

    return isDark;
  },
});
