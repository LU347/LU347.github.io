import ProjectCard from "./ProjectCard";
import { projectData } from "../lib/projectData";

function ProjectsContainer() {
    return (
        <div className="grid grid-cols-1 gap-6 w-full">
            {
                projectData.map((data) => (
                    <ProjectCard
                        title={data.title}
                        description={data.description}
                        imageURL={data.imageURL}
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