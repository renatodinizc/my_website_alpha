import './mycss.css';

console.log("I'm running baby!");

const element = document.createElement('h1');
const element2 = document.createElement('h2');

element.innerText = 'Hello World!';
element2.innerText = 'This is my blog alpha version';

document.getElementById('content').appendChild(element);
document.getElementById('content').appendChild(element2);