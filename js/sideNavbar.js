const sideNavbar = document.createElement('div');
sideNavbar.className = 'sideNav';
sideNavbar.innerHTML = `
  <a>
    <div class="side-navBtn">
      <i class="fas fa-home"></i>
      <span>home</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn">
      <i class="fa-solid fa-user"></i>
      <span>user</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn">
      <i class="fa-solid fa-pen"></i>
      <span>Posting</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn">
      <i class="fa-sharp fa-regular fa-heart"></i>
      <span>Like</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn">
      <i class="fa-solid fa-gear"></i>
      <span>setting</span>
    </div>
  </a>
  `

document.querySelector('.side-navbar').appendChild(sideNavbar);