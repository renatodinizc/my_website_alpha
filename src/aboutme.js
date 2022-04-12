import profile from './images/profile.jpg';

const aboutMe = () => {
  const board = document.createElement('main');
  document.getElementById('body').appendChild(board);
  board.setAttribute('id', 'aboutMeBoard');

  const title = document.createElement('h2');
  board.appendChild(title);
  title.innerText = "Hello, I'm Renato!";

  const img = document.createElement('img');
  board.appendChild(img);
  img.src = profile;

  const description = document.createElement('p');
  board.appendChild(description);
  description.innerText = "Failure is the heartbeat of discovery. We stumble a lot trying new things. And at one of those tries, I discovered programming. \n \n I've started to learn how to program just for fun and fell in love with it. So much, that I want to pursue it for the rest of my life. Web development allows me to express my creativity more satisfyingly, create with a clear structure, and focus in on details in a way I've never been able to do before. \n \n After over a year of study, I am ready to contribute to the world in this new way, and I'm looking forward to bringing the best traits of a creative developer to the table."
};

export default aboutMe;