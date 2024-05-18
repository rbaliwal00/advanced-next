import {
  ApolloClient,
  // split,
  NormalizedCacheObject,
  HttpLink,
  from,
} from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
// import { getMainDefinition } from "@apollo/client/utilities";

import { config } from "@modules/common";
import cache from "./cache";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      "x-hasura-admin-secret":
        config.HASURA_ADMIN_SECRET,
    },
  };
});

const httpLink = new HttpLink({
  uri: config.API_ENDPOINT,
  credentials: "same-origin",
});

// const wssLink = new WebSocketLink({
//     uri: process.env.NEXT_PUBLIC_API_ENDPOINT!.replace("http", "ws"),
//     options: {
//         reconnect: true,
//         connectionParams: () => ({
//             headers: {
//                 // ...(getToken() && { Authorization: getToken() })
//                 ...(process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET && {
//                     "x-hasura-admin-secret":
//                         process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
//                 }),
//             },
//         }),
//     },
//     webSocketImpl: require("websocket").w3cwebsocket,
// });

// const splitLink = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === "OperationDefinition" &&
//             definition.operation === "subscription"
//         );
//     },
//     wssLink,
//     authLink.concat(httpLink),
// );

const allLinks = [
  // splitLink
  authLink.concat(httpLink),
];

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from(allLinks),
    cache,
    connectToDevTools: true,
  });
}

export const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient();
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }

  return apolloClient;
};
