
/* ------PORTFOLIO.HTML------ */
const descBtn1 = document.getElementById("description1-btn");
const descBtn2 = document.getElementById("description2-btn");
const descBtn3 = document.getElementById("description3-btn");
const defaultCloseBtn = document.getElementById('close-btn-default')
const closeButtons = document.querySelectorAll('.close-btn');


/* ARRAYS OF PROJECT AND DESCRIPTION ELEMENTS */
const projects = [
    document.getElementById("project1"),
    document.getElementById("project2"),
    document.getElementById("project3")

];
const descriptions = [
    document.getElementById("description1"),
    document.getElementById("description2"),
    document.getElementById("description3"),
    document.getElementById('description-default')
];

/* FUNCTIONS TO UPDATE PROJECTS AND
 DESCRIPTIONS FROM CLICKED TO HIDDEN */
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
// ADD EVENTLISTENERS TO PROJECTS ARRAY
projects.forEach((project, index) => {
    project.addEventListener('click', function () {
        updateProjectClass(projects, descriptions, index);
    });
});

// Function to remove 'clicked' from all projects and add 'hidden' to all descriptions
function resetProjectsAndDescriptions() {
    projects.forEach(project => {
        project.classList.remove('clicked');
    });
    descriptions.forEach(description => {
        description.classList.add('hidden');
    });
}
// ADD AN EVENT LISTENER TO CLOSE BTNS AND RUN resetProjectsAndDescriptions()
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        resetProjectsAndDescriptions();
    });
});
// ADD AN EVENT LISTENER TO CLOSE BTN ON DEFAULT DESCRIPTION
defaultCloseBtn.addEventListener('click', function() {
    resetProjectsAndDescriptions();
})


// -OFFSITE PROJECT LINKS- //
descBtn1.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/Game-of-War/', 'GameOfWar', 'height=600, width=400');
});

descBtn2.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/Twimba/', '_blank');
});

descBtn3.addEventListener('click', function () {
    window.open('https://outofthefox.github.io/NFT-Project/', '_blank');
});

/* ------ABOUT.HTML------ */

/* ------CONTACT.HTML------ */

