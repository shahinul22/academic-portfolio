
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

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// Close the menu when a link is clicked
document.querySelectorAll('#mobile-menu li').forEach((item) => {
    item.addEventListener('click', () => {
        menuToggle.checked = false;
        mobileMenu.classList.add('hidden');
    });
});


 document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check saved mode from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});
document.querySelectorAll('.menu button').forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        document.querySelectorAll('.menu button').forEach((btn) => {
            btn.classList.remove('active');
        });

        // Add the 'active' class to the clicked button
        button.classList.add('active');
    });
});
