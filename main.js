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
        <img id="project-img" src=${data.image}>
        <div id="info" class="project-info">
            <h1>${data.name}</h1>
            <p>${data.description}</p>
            <ul>
                <li>${data.tech_stack}</li>
            </ul>
        </div>
    `
    projectsContainer.appendChild(card)
}