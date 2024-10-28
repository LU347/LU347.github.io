import ProjectsContainer from "./ProjectsContainer";

function Projects() {
  return (
    <section id="projects" className="overflow-auto h-screen flex flex-col align-items-center">
      <div className="text-center pb-12 m-8 text-6xl oonfont-bold font-serif">
        <h1>Projects</h1>
      </div>
      <div className="flex justify-center items-center">
        <ProjectsContainer />
      </div>
    </section>
  )
}

export default Projects