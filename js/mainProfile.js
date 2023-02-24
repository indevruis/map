const userInformation = {
  id: 'indevruis',
  name: '서윤',
  introduce: '게이머',
  location: '부산 동구'
}

const user = {
  posting: 3,
  followers: 154,
  follow: 140
}

const mainProfile = document.createElement('div');
mainProfile.className = 'profile';
mainProfile.innerHTML = `
  <div class="profile-photo">
  <img class="profile-img" src="./img/profile.png">
  </div>
  <div class="profile-information">
  <ul>
    <li>
      <div>
        아이디
        <span>${userInformation.id}</span>
      </div>
    </li>
    <li>
      <div>
        이름
        <span>${userInformation.name}</span>
      </div>
    </li>
    <li>
      <div>
        소개
        <span>${userInformation.introduce}</span>
      </div>
    </li>
    <li>
      <div class="location">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <p>${userInformation.location}</p>
      </div>
    </li>
  </ul>
  </div>
  <div class="follow-box">
  <ul>
    <li>
      <div>
        <span>${user.posting}</span>
        게시물
      </div>
    </li>
    <li>
      <div>
        <span>${user.followers}</span>
        팔로워
      </div>
    </li>
    <li>
      <div>
        <span>${user.follow}</span>
        팔로우
      </div>
    </li>
  </ul>
  </div>
  `;

document.querySelector('.main-profile').appendChild(mainProfile);