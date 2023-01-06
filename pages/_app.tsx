import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global-styles";
import { darkTheme, lightTheme } from "styles/theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        {/* <input type="checkbox" onClick={() => setIsDarkTheme(!isDarkTheme)} /> */}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
