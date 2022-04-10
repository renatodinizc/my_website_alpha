const header = () => {
  const header = document.createElement('header');
  document.getElementById('body').appendChild(header);

  const homeBtn = document.createElement('button');
  homeBtn.innerText = 'Renato Diniz';
  const projectsBtn = document.createElement('button');
  projectsBtn.innerHTML = 'Projects';
  const essaysBtn = document.createElement('button');
  essaysBtn.innerText = 'Essays';
  const aboutMeBtn = document.createElement('button');
  aboutMeBtn.innerText = 'About Me';

  header.appendChild(homeBtn);
  header.appendChild(projectsBtn);
  header.appendChild(essaysBtn);
  header.appendChild(aboutMeBtn);

}

export default header;
