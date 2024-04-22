'use server'
import { gql } from '@apollo/client';
import { getApolloClient } from './apollo-client';

interface Project {
  name: string,
  id: string
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

export async function fetchAllProjects(): Promise<Project[]> {
  try {
    const client = await getApolloClient();
    const response = await client.query({
      query: FETCH_PROJECTS_QUERY,
    });

    return response.data.me.projects.edges.map((project: any) => ({
      id: project.node.id,
      name: project.node.name

    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}
