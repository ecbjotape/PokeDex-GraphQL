import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global-styles";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";

import { isDarkTheme } from "atoms/theme/selectors/darkTheme";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "styles/theme";

const Theme = ({ children }: any) => {
  const isDark = useRecoilValue(isDarkTheme);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Theme>
          <GlobalStyles />
          <Component {...pageProps} />
        </Theme>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
