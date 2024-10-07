// import ProjectCard from '../components/ProjectCard'
// import projects from '../projects.json'

// export default function Home() {
//   return (
//     <main className="py-16">
//       <h1 className="text-6xl font-bold mb-4">Nillion Showcase</h1>
      
//       <section className="my-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </section>
//     </main>
//   )
// }
import ProjectCard from '../components/ProjectCard'
import projects from '../projects.json'

export default function Home() {
  return (
    <main className="py-16">
      <div className="flex flex-col lg:flex-row items-center mb-16">

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-6xl font-bold mb-4">Nillion Builder Showcase</h1>
          <p className="text-xl mb-6">Discover a wide range of privacy-preserving solutions built in the Nillion ecosystem.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Projects
          </button>
        </div>
        <div className="lg:w-1/2 pr-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-96 w-full"></div>
        </div>
      </div>
      
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}