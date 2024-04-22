'use server'

import { gql } from '@apollo/client';
import { getApolloClient } from './apollo-client';
import { getUniqueServices } from '@/application/utils/getUniqueServices/getUniqueServices';


export interface Service {
  __typename: string,
  node: {
    __typename: string,
    id: string,
    name: string
  }
}

interface Project {
  __typename: string,
  node: {
    __typename: string,
    id: string,
    name: string,
    services: Service[]
  }
}

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

export async function getServices(projectId: string): Promise<any[]> {
  try {
    console.log(projectId)
    const client = await getApolloClient()
    const response = await client.query({
      query: FETCH_PROJECTS_QUERY,
    });

    const services = response.data.me.projects.edges.filter((project: Project) => project.node.id == projectId)[0].node.services.edges

    const uniqueServces = getUniqueServices(services)
    console.log("uniqueServces", uniqueServces)
    return services;

  } catch (error) {
    console.error('Error fetching containers:', error);
    throw new Error('Failed to fetch containers');
  }
}

