import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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
  fetchOptions: {
    credentials: "include",
  },
});

export default function createApolloClient() {
  return new ApolloClient({
    credentials: "include",
    ssrMode: typeof window === "undefined",
    link: link,
    cache: new InMemoryCache(),
  });
}
export const go = new ApolloClient({
  link: link,
  credentials: "include",
  cache: new InMemoryCache({
    typePolicies: {
      TeacherTests: {
        keyFields: ["test_id"],
      },
      TestResults: {
        keyFields: ["test_result_id"],
      },
    },
  }),
});
