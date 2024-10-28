
function ProjectCard(props: any) {
    return (
        <div className="m-auto w-11/12 h-[250px] border border-purple-900 rounded-xl grid grid-cols-6">
            <div className="col-span-2 m-auto">
                <img src={props.imageLink} width="100px" height="100px" alt="Project Image"></img>
            </div>
            <div className="col-span-4 flex flex-col justify-evenly">
                <div className="text-2xl font-serif font-medium">{props.title || "Title"}</div>
                <div>{props.description || "Description" }</div>
                <div className="flex flex-row">
                    <a href={props.github} className="mr-2 hover:text-xl hover:font-semibold">GitHub</a>
                    <a href={props.liveLink} className="mr-2 hover:text-xl hover:font-semibold">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard