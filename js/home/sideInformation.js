const birthday = '2003.02.04';
const work = '학생';
const website = 'https://github.com/indevruis';
const about = '그 외 정보';

const information = document.createElement('div');
information.className = 'side-information';
information.innerHTML = `
    <ul>
      <li>
        <div>
          <i class="fa-solid fa-cake-candles"></i>
          Birthday
          <span>${birthday}</span>
        </div>
      </li>
      <li>
        <div>
          <i class="fa-solid fa-briefcase"></i>
          Work
          <span>${work}</span>
        </div>
      </li>
      <li>
        <div>
          <i class="fa-solid fa-link"></i>
          Website
          <span><a href="${website}">${website}</a></span>
        </div>
      </li>
      <li>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          About
          <span>${about}</span>
      </li>
    </ul>
  `;

document.querySelector('.main-contents').appendChild(information);