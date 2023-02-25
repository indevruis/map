const pages = ['.side-information', '.main-photos', '.grid', '.map'];

const navbar = document.createElement('div');

navbar.className = 'main-navbar';
navbar.innerHTML = `
  <a class="onclick-navBtn">
  <div class="navBtn profile-btn">
    <i class="far fa-user"></i>
    <span>Profile</span>
  </div>
  </a>
  <a>
  <div class="navBtn posting-btn">
    <i class="fas fa-th"></i>
    <span>Posting</span>
  </div>
  </a>
  <a>
  <div class="navBtn map-btn">
    <i class="fas fa-map-marker-alt"></i>
    <span>Map</span>
  </div>
  </a>
  `;

document.querySelector('.main-page-navbar').appendChild(navbar);

const navBtn = document.querySelectorAll('.navBtn');

navBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    navBtn.forEach((rmbtn)=>{
      rmbtn.parentNode.classList.remove('onclick-navBtn');
    })
    btn.parentNode.classList.add('onclick-navBtn')
  })
})

document.querySelector('.main-navbar').addEventListener('click', (e) => {
  const target = e.target.closest('.navBtn').className;

  pages.forEach((page)=>{
      document.querySelector(page).classList.add('block');
      document.querySelector('.main-contents').classList.remove('block');
    })

    if (target.includes('profile-btn')) {
      document.querySelector('.side-information').classList.remove('block');
      document.querySelector('.main-photos').classList.remove('block');
    } else if (target.includes('posting-btn')) {
      document.querySelector('.main-contents').classList.add('block');
      document.querySelector('.grid').classList.remove('block');
    } else if (target.includes('map-btn')) {
      document.querySelector('.map').classList.remove('block');
    }
});