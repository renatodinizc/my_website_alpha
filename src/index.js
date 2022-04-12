import './style.css';
import header from './header';
import projects from './projects';
import clear from './clear';
import essays from './essays.js';
import footer from './footer.js';
import aboutMe from './aboutme';

header();
projects();
footer();

document.getElementById('projectsButton').addEventListener('click', projectsPage);
document.getElementById('essaysButton').addEventListener('click', essaysPage);
document.getElementById('aboutMeButton').addEventListener('click', aboutMePage);

function projectsPage() {
  clear();
  projects();
  footer();
};

function essaysPage() {
  clear();
  essays();
  footer();
};

function aboutMePage() {
  clear();
  aboutMe();
  footer();
};

