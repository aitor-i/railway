'use server'
import { gql } from '@apollo/client';
import { getApolloClient } from './apollo-client';
import { FetchedProjects, Project } from '@/services/graphql/graphql-types';

interface ProjectRes {
  name: string,
  id: string
}

const FETCH_PROJECTS_QUERY = gql`
query fetchProjects {
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
`

export async function getEnviroments(projectId: string) {
  try {
    const client = await getApolloClient();
    const response = await client.query({
      query: FETCH_PROJECTS_QUERY,
    });

    const projects: FetchedProjects = response.data

    return projects.me.projects.edges.filter(project => project.node.id === projectId)[0].node.services.edges;

  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}

