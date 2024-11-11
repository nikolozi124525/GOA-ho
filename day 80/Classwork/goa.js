
const projects = [
    { title: "Project 1", description: "This is a description of project 1." },
    { title: "Project 2", description: "This is a description of project 2." },
    { title: "Project 3", description: "This is a description of project 3." }
];


const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);

    projectList.appendChild(projectDiv);
});
