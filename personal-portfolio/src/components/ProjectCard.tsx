
function ProjectCard(props: any) {
    return (
        <div className="m-auto p-4 min-h-72 w-full border border-purple-900 rounded-xl flex flex-col justify-center items-center">
            <div className="col-span-2 flex flex-col justify-around items-center">
                <div className="text-2xl font-serif font-medium">{props.title || "Title"}</div>
                <div className="p-4 text-center text-base font-thin">{props.description || "Description" }</div>
                <div className="flex flex-row">
                    <a href={props.github} target="_blank" rel="noopener noreferrer" className="mr-2 hover:text-xl hover:font-semibold">GitHub</a>
                    {
                        props.liveLink !== null ? (
                            <a href={props.liveLink} target="_blank" rel="noopener noreferrer" className="mr-2 hover:text-xl hover:font-semibold">Live Link</a>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard