const logo = document.createElement('div');
logo.className = 'logo flex';
logo.innerHTML = `
  LOGO
`;

document.querySelector('.main-background').appendChild(logo);

document.querySelector('.logo').addEventListener('click', (e)=>{
  window.location = "http://127.0.0.1:5500/map/login.html"
})