const footer = () => {
  const footerTab = document.createElement('footer');
  document.getElementById('body').appendChild(footerTab);
  footerTab.innerText = 'Designed by Renato Diniz in Curitiba';
}

export default footer;