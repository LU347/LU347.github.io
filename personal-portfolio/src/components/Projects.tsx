import ProjectsContainer from "./ProjectsContainer";

function Projects() {
  return (
    <section id="projects" className="overflow-auto h-auto pb-32">
      <div className="text-center pb-12 m-8 text-6xl font-serif font-medium">
        <h1>Projects</h1>
      </div>
      <div className="flex justify-center items-center">
        <ProjectsContainer />
      </div>
    </section>
  )
}

export default Projects