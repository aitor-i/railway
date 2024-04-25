'use server'
import { gql } from "@apollo/client";
import { getApolloClient } from './apollo-client'
import { revalidatePath } from "next/cache";
import createServie from './../../services/graphql/mutations/createServices.graphql'

const CREATE_SERVICE_MUTATION = gql(createServie)

export async function buildContainerFromImage(
  projectId: string,
  dockerImage: string
): Promise<any> {
  try {
    const testProjectId = process.env.TEST_PROJECT_ID
    if (testProjectId !== projectId) throw Error("This project is close to editing!")
    const client = await getApolloClient()
    const response = await client.mutate({
      mutation: CREATE_SERVICE_MUTATION,
      variables: {
        projectId,
        dockerImage,
      },
    });

    revalidatePath(`projects/${projectId}`)
    return response.data.serviceCreate;
  } catch (error) {
    console.error('Error creating service from Docker image:', error);
    throw new Error('Failed to create service from Docker image');
  }
}

