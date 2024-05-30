// _app.tsx or _app.js
import { ApolloProvider } from "@apollo/client";
import { RootStoreProvider } from "@mobx";
import { initializeApollo } from "@services/graphql";
import "@styles/global.scss";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Layout from "./layout"; // Import your layout component
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { createTheme, ThemeProvider } from "@mui/material";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const apolloClient = initializeApollo();
  const router = useRouter();

  const theme = createTheme({
    typography: {
      fontFamily: 'poppins',
    },
  });

  return (
    <ApolloProvider client={apolloClient}>
      <RootStoreProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </RootStoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
