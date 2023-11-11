const descBtn1 = document.getElementById("description1-btn");
const descBtn2 = document.getElementById("description2-btn");
const descBtn3 = document.getElementById("description3-btn");

const projects = [
    document.getElementById("project1"),
    document.getElementById("project2"),
    document.getElementById("project3")

];

const descriptions = [
    document.getElementById("description1"),
    document.getElementById("description2"),
    document.getElementById("description3")
]

function updateProjectClass(projects, descriptions, clickedProjectIndex) {
    projects.forEach(project => {
        project.classList.remove('clicked');
    });
    descriptions.forEach(description => {
        description.classList.add('hidden');
    });

    projects[clickedProjectIndex].classList.add('clicked');
    descriptions[clickedProjectIndex].classList.remove('hidden');
}

projects.forEach((project, index) => {
    project.addEventListener('click', function () {
        updateProjectClass(projects, descriptions, index);
    });
});

descBtn1.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/Game-of-War/', 'GameOfWar', 'height=600, width=400');
});

descBtn2.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/Twimba/', '_blank');
});

descBtn3.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/NFT-Project/', '_blank');
});



