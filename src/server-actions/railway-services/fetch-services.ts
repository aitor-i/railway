'use server'

import { gql } from '@apollo/client';
import { getApolloClient } from './apollo-client';
import { getUniqueServices } from '@/application/utils/getUniqueServices/getUniqueServices';
import { FetchedProjects, Project } from '@/services/graphql/graphql-types';

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
          }
        }
      }
    }
  }
`;

export async function getServices(projectId: string) {
  try {
    console.log(projectId)
    const client = await getApolloClient()
    const response = await client.query({
      query: FETCH_PROJECTS_QUERY,
    });

    const projects: FetchedProjects = response.data

    const project = projects.me.projects.edges.filter(project => project.node.id === projectId)[0]

    const services = project.node.services.edges;
    const uniqueServces = getUniqueServices(services)

    return { uniqueServces, project };

  } catch (error) {
    console.error('Error fetching containers:', error);
    throw new Error('Failed to fetch containers');
  }
}

