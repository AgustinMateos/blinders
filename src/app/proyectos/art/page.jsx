import { projects } from '../../../components/ProjectsData';
import Link from 'next/link';
import Image from 'next/image';

export default function Art() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Proyectos Art</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.corp.map((project) => (
          <Link key={project.id} href={`/proyectos/art/${project.id}`}>
            <div className="cursor-pointer">
              <Image
                src={project.cover}
                alt={project.title}
                width={400}
                height={300}
                priority
                className="rounded-lg"
              />
              <p className="mt-2 text-center">{project.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}