import './style.css';
import header from './header';
import projects from './projects';
import clear from './clear';

header();
projects();

document.getElementById('homeButton').addEventListener('click', projectsPage);

function projectsPage() {
  clear();
  projects();
};