import { selector } from "recoil";

import { isDarkTheme as themeDefault } from "../index";

export const isDarkTheme = selector({
  key: "isDarkTheme",
  get: ({ get }) => {
    const isDark = get(themeDefault);

    return isDark;
  },
});
