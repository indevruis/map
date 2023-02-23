const birthday = '2002.02.04';
const work = '학생';
const website = 'https://github.com/indevruis';
const about = '그 외 정보';

const information = document.createElement('div');
information.className = 'side-information';
information.innerHTML = `
    <ul>
      <li>
        <div>
          Birthday
          <span>${birthday}</span>
        </div>
      </li>
      <li>
        <div>
          Work
          <span>${work}</span>
        </div>
      </li>
      <li>
        <div>
          Website
          <span><a href="${website}">${website}</a></span>
        </div>
      </li>
      <li>
        <div>
          About
          <span>${about}</span>
      </li>
    </ul>
  `;

document.querySelector('.main-contents').appendChild(information);