const Projects = () => {
    let component
    function handleClick(event) {
        var button = event.target;
        let projectContainer = window.document.getElementById("project-container");

        if (button.id === "classProjects") {
            projectContainer.innerHTML = "Class Projects:"
        } else if (button.id === "personalProjects") {
            projectContainer.innerHTML = "Personal projects:"
        }
    }

    return ( 
        <div className="projectsNav">
            <div class="container">
                <div class="project-nav">
                        <button class="project-button" id="classProjects" onClick={handleClick}>College</button>
                        <button class="project-button" id="personalProjects" onClick={handleClick}>Personal</button>
                </div>
            </div>
            <div class="container" id="project-container"></div>
        </div>
     );
}
 
export default Projects;