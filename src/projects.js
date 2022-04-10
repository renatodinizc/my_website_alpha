import etch_a_sketch from './images/etch-a-sketch.png';
import calculator from './images/calculator.png';
import professional_dashboard from './images/professional-dashboard.png';
import red_bull_landing_page from './images/red-bull-landing-page.png';
import freelancing_hub from './images/freelancing-hub.png';
import am4zon from './images/am4zon.png';

const projects = () => {

  const projectImages = [etch_a_sketch, calculator, professional_dashboard,
                         red_bull_landing_page, freelancing_hub, am4zon];
  const projectTitles = ['Etch A Sketch', 'Calculate Me!', 'Professional Dashboard',
                        'RedBull® landing page', 'Freelancing Hub', 'Am4zon'];
  const projectDescriptions = [
    'Online Etch A Sketch game simulation',
    'Complete functional online calculator',
    'Professional admin project dashboard',
    'Simulation of a RedBull® landing page for new products',
    'FreelancingHUB is a free B2B digital platform, which aims to promote an environment of business connections with a social purpose between organizations of different activities and freelancers from all over the country.',
    'The Am4zon project is in essence a clone website from the original Amazon®. In the Am4zon platform, users can easily access all books by genre and author, search through our entire database via the menu search box and access book collections tailored by our specialists.'
  ];

  const projectBoard = document.createElement('main');
  document.getElementById('body').appendChild(projectBoard);
  

  for(let i = 0; i < projectTitles.length; i++) {
    let project = document.createElement('div');
    project.classList.add('project');
    let img = document.createElement('img');
    img.src = projectImages[i];
    project.appendChild(img);

    let title = document.createElement('h3');
    title.innerText = projectTitles[i];
    project.appendChild(title);

    let description = document.createElement('p');
    description.innerText = (projectDescriptions[i]);
    project.appendChild(description);

    projectBoard.appendChild(project);
  };
};

export default projects;
