import NewServiceCard from '@/components/NewServiceCard/NewServiceCard'
import BackgroundDots from '@/components/ui/BackgroundDots/BackgroundDots'
import Card from '@/components/ui/Card/Card'
import { getServices } from '@/server-actions/railway-services/fetch-services'
import { getEnviroments } from '@/server-actions/railway-services/get-enviroments'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const id = params.id
  const testProjectId = process.env.PUBLIC_NEXT_TEST_PROJECT_ID

  const isValid = testProjectId === id;

  const { project, uniqueServces: services } = await getServices(id)
  getEnviroments(id)

  return (
    <main className="shadow-custom-spread min-h-screen flex flex-col gap-8 py-16 px-4 md:px-32">
      <h1 className="text-3xl md:text-4xl font-bold">{project.node.name}</h1>
      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => <Card key={service.node.id}>
          <h2 className='font-bold'>{service.node.name}</h2>
        </Card>)}
        {isValid &&
          <NewServiceCard projectId={id} />
        }
      </section>
      {!isValid && <span className="p-4 rounded-sm border border-red-300 absolute top-4 right-4 bg-red-200">This project is protected against changes!</span>}
      <BackgroundDots />
    </main>
  )
}
