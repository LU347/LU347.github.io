let sidebar = document.getElementById("sidebar");

//Temp sidebar until I figure out how to expand the mobile nav
let openSideBarButton = document.getElementById("open-sidebar-button");
openSideBarButton.addEventListener("click", (e) => {
    sidebar.style.display = "block";
})

let closeSidebarButton = document.getElementById("close-sidebar-button");
closeSidebarButton.addEventListener("click", (e) => {
    sidebar.style.display = "none";
})

var projectJSON = "./lib/projects.json"
var projectsContainer = document.getElementById("projects-container")

fetch(projectJSON)
    .then((res) => {
        if (!res.ok) {
            throw new Error
                (`HTTP error! Status: ${res.status}`);
                }
                    return res.json();
                })
    .then((data) =>
        data.forEach((obj) => {
            createProjectCard(obj)
        })
    )
    .catch((error) =>
        console.error("Unable to fetch data:", error));

function createProjectCard(data) {
    var card = document.createElement("div")
    card.classList.add("project-card")
    card.innerHTML = `
        <img id="project-img" src=${data.image}>`

    let projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info")

    projectInfo.innerHTML = `
        <h1>
            <a href=${data.link}  target="_blank" rel="noreferrer noopener">${data.name} <img class="icon" src="assets/icons/github-mark-white.svg"></a>  
        </h1>
        <p>${data.description}</p>
    `
    
    let tech_list = document.createElement("ul");
    tech_list.classList.add("tech-stack-container")

    let technologies = data.tech_stack
    technologies.forEach((tech)=> {
        let element = document.createElement("li") //left off here
        element.innerText = tech
        tech_list.appendChild(element)
    });
    
    projectInfo.appendChild(tech_list)
    card.appendChild(projectInfo)
    projectsContainer.appendChild(card)
}