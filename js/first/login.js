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
      <label><input type="checkbox">로그인 상태 유지</label>
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