'use server'

import { gql } from '@apollo/client';
import { getApolloClient } from './apollo-client';

const FETCH_PROJECTS_QUERY = gql`
  query {
    me {
      projects {
        edges {
          node {
            id
            name
            services {
              edges {
                node {
                  id
                  name
                }
              }
            }
            plugins {
              edges {
                node {
                  id
                  name
                }
              }
            }
            environments {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getServices(projectId: string): Promise<any[]> {
  try {
    const client = await getApolloClient()
    const response = await client.query({
      query: FETCH_PROJECTS_QUERY,
      variables: { projectId },
    });

    const project = response.data.projects.filter((project: any) => project.id === projectId)
    console.table(project)

    const services = response.data.project.services.edges.map(
      (edge: any) => edge.node
    );

    return services;
  } catch (error) {
    console.error('Error fetching containers:', error);
    throw new Error('Failed to fetch containers');
  }
}

