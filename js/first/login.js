const user = []

const logo = 'Logo';

const login = document.createElement('div');
login.className = 'loginBox';
login.innerHTML = `
  <div class="flex loginLogo">${logo}</div>
  <div class="userInput flexC">
    <div>
      <input type="text" placeholder="아이디">
    <div>
    </div>
      <input type="passward" placeholder="비밀번호">
    </div>
    <div class="checkbox">
        <i class="far fa-check-circle"></i>
        <span>로그인 상태 유지</span>
    </div>
    <div>
      <button class="loginBtn">로그인</button>
    </div>
  </div>
  <div>
    <ul class="flex">
      <li>
        <a><span>비밀번호 찾기</span></a>
      </li>
      <li>
        <a><span>아이디 찾기</span></a>
      </li>
      <li>
        <a><span>회원가입</span></a>
      </li>
    </ul>
  </div>
`;

document.querySelector('.loginPage').appendChild(login);

const handleSaveValue = () => {
  const userInput = {
    id: document.querySelectorAll('input')[0].value,
    pwd: document.querySelectorAll('input')[1].value
  }

  user.push(userInput);
  localStorage.setItem('user', JSON.stringify(user));

  document.querySelectorAll('input')[0].value = '';
  document.querySelectorAll('input')[1].value = '';
}

document.querySelector('.fa-check-circle').addEventListener('click', (e)=>{
  e.target.classList.toggle('checked');
})

document.querySelector('.loginBtn').addEventListener('click', (e)=>{
  e.preventDefault();
  handleSaveValue();
  window.location = "http://127.0.0.1:5500/map/home.html"
})

document.querySelector('body').addEventListener('keyup', (e)=>{
  if (e.key === 'Enter') {
    handleSaveValue();
    window.location = "http://127.0.0.1:5500/map/home.html"
  }
})