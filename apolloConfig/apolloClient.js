import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { setContext } from "@apollo/client/link/context";
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_URI,
  credentials: "include",
});
// const authLink = setContext((_, { headers }) => {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZWlkQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjMwMzI2NDUxfQ.IE8lSuseHM25YGRfCXezZVKrSCG4ywSFJRBtIM-i4s4";
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: errorLink.concat(link),
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache({}),
  });
};
