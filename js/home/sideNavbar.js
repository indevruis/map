const sideNavbar = document.createElement('div');
sideNavbar.className = 'sideNav';
sideNavbar.innerHTML = `
  <a>
    <div class="side-navBtn home">
      <i class="fas fa-home"></i>
      <span>home</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn user">
      <i class="fa-solid fa-user"></i>
      <span>user</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn posting">
      <i class="fa-solid fa-pen"></i>
      <span>Posting</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn like">
      <i class="fa-sharp fa-regular fa-heart"></i>
      <span>Like</span>
    </div>
  </a>
  <a>
    <div class="side-navBtn setting">
      <i class="fa-solid fa-gear"></i>
      <span>setting</span>
    </div>
  </a>
  `

document.querySelector('.side-navbar').appendChild(sideNavbar);

document.querySelector('.sideNav').addEventListener('click', (e)=>{
  const target = e.target.closest('.side-navBtn').className;
  
  if(target.includes('home')){
    window.location = "http://127.0.0.1:5500/map/home.html"
  } else if(target.includes('user')){
    window.location = "http://127.0.0.1:5500/map/user.html"
  } else if(target.includes('posting')){
    window.location = "http://127.0.0.1:5500/map/user.html"
  } else if(target.includes('like')){

  } else if(target.includes('setting')){

  }
})