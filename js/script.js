
// Utility functions
function hideAllSections() {
    const sections = ['banner-introduction', 'mission', 'experience', 'cv', 'projects-id', 'contact-id'];
    sections.forEach(sectionID => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.classList.add('hidden');
        }
    });
}

function showSection(sectionID) {
    const section = document.getElementById(sectionID);
    if (section) {
        section.classList.remove('hidden'); // Show the specific section
    }
}

// Event handler functions
function showHome() {
    hideAllSections();
    showSection('banner-introduction');
    showSection('mission');
}

function showExperience() {
    hideAllSections();
    showSection('experience');
}

function showCV() {
    hideAllSections();
    showSection('cv');
}

function showProjects() {
    hideAllSections();
    showSection('projects-id');
}

function showContact() {
    hideAllSections();
    showSection('contact-id');
}

// Initialize by showing banner-introduction and mission
window.onload = function () {
    showHome();
};
