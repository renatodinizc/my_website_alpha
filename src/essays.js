import articles from './articles.json';

const essays = () => {

  const essayBoard = document.createElement('main');
  document.getElementById('body').appendChild(essayBoard);
  essayBoard.classList.add('essayBoard');

  for(let i = 0; i < articles.length; i++) {
    const essay = document.createElement('article');
    essayBoard.appendChild(essay);
    essay.classList.add('essay');

    const title = document.createElement('h3');
    title.innerText = articles[i].title;
    essay.appendChild(title);

    const date = document.createElement('h6');
    date.innerText = articles[i].date;
    essay.appendChild(date);

    const content = document.createElement('p');
    content.innerText = articles[i].content;
    essay.appendChild(content);
  };
}

export default essays;