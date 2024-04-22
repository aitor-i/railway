'use server'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const GRAPHQL_ENDPOINT = process.env.RAILWAY_ENDPOINT;
const AUTH_TOKEN = process.env.RAILWAY_TOKEN;

export async function getApolloClient() {
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });

  return client
}

