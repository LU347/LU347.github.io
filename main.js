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

var liveIconURL = "./assets/images/live-icon.png";

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

    if ("live_link" in data) {
        var liveLink = document.createElement("a");
        liveLink.setAttribute("href", `${data.live_link}`);
        liveLink.setAttribute("target", "_blank");
        liveLink.setAttribute("rel", "noreferrer noopener");

        var liveIconImage = document.createElement("img");
        liveIconImage.classList.add("live-icon");
        
        liveIconImage.setAttribute("alt", "Live icon image");
        liveIconImage.setAttribute("src", liveIconURL);
        
        //Breaks when I transfer this to index.css
        liveIconImage.style.filter = "drop-shadow(0 0 1rem #00ff44)"
        liveIconImage.style.margin = "0.5rem";
        liveIconImage.style.height = "45px";
        liveIconImage.style.width = "45px";
        liveIconImage.style.position = "absolute";
        liveIconImage.style.top = 0;
        liveIconImage.style.left = 0;
        liveIconImage.style.zIndex = 10;
        liveIconImage.style.animation = "blink 1.5s steps(5, start) infinite";

        liveLink.appendChild(liveIconImage);
        card.appendChild(liveLink);
    }
    
    projectInfo.appendChild(tech_list)
    card.appendChild(projectInfo)
    projectsContainer.appendChild(card)
}