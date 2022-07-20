import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  const headers = { 'Content-Type': 'application/json' };
  const token = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;

  headers.Authorization = token;
}

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`,
  credentials: 'same-origin',
});

const cache = new InMemoryCache({
  resultCaching: false,
});

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
