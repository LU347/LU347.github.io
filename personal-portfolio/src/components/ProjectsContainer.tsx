import ProjectCard from "./ProjectCard";
import { projectData } from "../lib/data";

function ProjectsContainer() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-3/4 h-1/2">
            {
                projectData.map((data) => (
                    <ProjectCard
                        key={data.id}
                        title={data.title}
                        description={data.description}
                        github={data.github}
                        liveLink={data.liveLink}
                    >
                    </ProjectCard>
                ))
            }
        </div>    
    )
}

export default ProjectsContainer