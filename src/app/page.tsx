import Card from "@/components/ui/Card/Card";
import { fetchAllProjects } from "@/server-actions/railway-services/fetch-projects";
import Link from "next/link";

export default async function Home() {
  const projects = await fetchAllProjects()
  return (
    <main className=" bg-background min-h-screen">
      <section className=" py-16 px-4 md:px-32 flex flex-col gap-4 md:gap-20 ">
        <h1 className="text-3xl md:text-4xl font-bold">Railway container manager</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {projects.map(project => <Link key={project.id} href={`/projects/${project.id}`}> <Card className="border h-44 flex flex-col justify-around p-4 rounded" key={project.id}>
            <h2 className="font-semibold">{project.name}</h2>
            <div className="flex justify-end w-full ">
            </div>
          </Card>

          </Link>)}


        </div>
      </section>
    </main >
  );
}
