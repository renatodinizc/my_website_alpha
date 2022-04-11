import './style.css';
import header from './header';
import projects from './projects';
import clear from './clear';
import essays from './essays.js';

header();
projects();

document.getElementById('homeButton').addEventListener('click', projectsPage);
document.getElementById('essaysButton').addEventListener('click', essaysPage);

function projectsPage() {
  clear();
  projects();
};

function essaysPage() {
  clear();
  essays();
};

