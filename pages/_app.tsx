import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global-styles";
import { darkTheme, lightTheme } from "styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      {/* <input type="checkbox" onClick={() => setIsDarkTheme(!isDarkTheme)} /> */}
    </ThemeProvider>
  );
}

export default MyApp;
