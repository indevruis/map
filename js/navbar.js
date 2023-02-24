const navbar = document.createElement('div');
navbar.className = 'navbar';
navbar.innerHTML = `
  <a>
  <div class="navBtn onclick-navBtn">
    <i class="far fa-user"></i>
    <span>Profile</span>
  </div>
  </a>
  <a>
  <div class="navBtn">
    <i class="fas fa-th"></i>
    <span>Posting</span>
  </div>
  </a>
  <a>
  <div class="navBtn">
    <i class="fas fa-map-marker-alt"></i>
    <span>Map</span>
  </div>
  </a>
  `;

document.querySelector('.main-navbar').appendChild(navbar);

const navBtn = document.querySelectorAll('.navBtn');

navBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    navBtn.forEach((rmbtn)=>{
      rmbtn.classList.remove('onclick-navBtn');
    })
    btn.classList.add('onclick-navBtn')
  })
})