import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <button key={tag} className="bg-nillion-blue text-white py-1 px-3 rounded-full text-sm font-semibold">
              {tag}
            </button>
          ))}
        </div> */}

        <div className="flex items-center gap-4">
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
            GitHub
          </a>
          <Link href={`/project/${project.id}`} className="text-blue-400 hover:underline">Learn more</Link>
        </div>
      </div>
    </div>
  )
}