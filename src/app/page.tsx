import Link from "next/link";
import { fetchAllProjects } from "./server-actions/railway-services/fetch-projects";

export default async function Home() {
  const projects = await fetchAllProjects()
  console.log(projects)
  return (
    <main className=" bg-background min-h-screen">
      <section className=" py-16 px-4 md:px-32 flex flex-col gap-4 md:gap-20 ">
        <h1 className="text-3xl md:text-4xl font-bold">Railway container manager</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {projects.map(project => <div className="border h-44 flex flex-col justify-around p-4 rounded" key={project.id}>
            <h2 className="font-semibold">{project.name}</h2>
            <div className="flex justify-end w-full ">
              <Link href={`/projects/${project.id}`} className="font-light text-sm">Watch</Link>
            </div>
          </div>)}


        </div>
      </section>
    </main>
  );
}
