import { ApolloProvider } from "@apollo/client";
import { RootStoreProvider } from "@mobx";
import { initializeApollo } from "@services/graphql";
import "@styles/global.scss";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const router = useRouter();
  return (
    <ApolloProvider client={apolloClient}>
      <RootStoreProvider>
        <Component {...pageProps} router={router} />
      </RootStoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
