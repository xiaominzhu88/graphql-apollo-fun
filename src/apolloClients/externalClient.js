import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

const externalClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default externalClient;
