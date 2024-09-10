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
