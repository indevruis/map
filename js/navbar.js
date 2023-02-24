const navbar = document.createElement('div');
navbar.className = 'main-navbar';
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

document.querySelector('.main-page-navbar').appendChild(navbar);

const navBtn = document.querySelectorAll('.navBtn');

navBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    navBtn.forEach((rmbtn)=>{
      rmbtn.classList.remove('onclick-navBtn');
    })
    btn.classList.add('onclick-navBtn')
  })
})

document.querySelector('.main-navbar').addEventListener('click', (e) => {
  const target = e.target.textContent;
  const icon = e.target.classList.value;
  document.querySelector('.side-information').classList.add('block');
  document.querySelector('.main-photos').classList.add('block');
    if (target === 'Profile' || icon === 'far fa-user') {
      document.querySelector('.side-information').classList.remove('block');
      document.querySelector('.main-photos').classList.remove('block');
    } else if (target === 'Posting' || icon === 'fas fa-th') {
      // Posting 클릭 이벤트 핸들러 처리
    } else if (target === 'Map' || icon === 'fas fa-map-marker-alt') {
      // Map 클릭 이벤트 핸들러 처리
    }
});