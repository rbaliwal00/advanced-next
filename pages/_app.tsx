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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const apolloClient = initializeApollo();
  const router = useRouter();

  return (
    <ApolloProvider client={apolloClient}>
      <RootStoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RootStoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
