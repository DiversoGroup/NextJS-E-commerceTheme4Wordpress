import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  headers[
    'Authorization'
  ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
}

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WP_API_URL}/graphql`,
  credentials: 'include',
});

const cache = new InMemoryCache({
  resultCaching: false,
});

const client = new ApolloClient({
  uri: link,
  cache: cache,
});

export default client;
