import './style.css';
import header from './header';
import projects from './projects';
import clear from './clear';
import essays from './essays.js';
import footer from './footer.js';

header();
projects();
footer();

document.getElementById('projectsButton').addEventListener('click', projectsPage);
document.getElementById('essaysButton').addEventListener('click', essaysPage);

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

