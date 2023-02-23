const photos = document.createElement('div');

photos.className = 'main-photos';
photos.innerHTML  = `
  <div class="slide-box">
    <img src="./img/Fukuoka.jpg">
  </div>
  <div class="slide-box">
    <img src="./img/Osaka.jpg">
  </div>
  <div class="slide-box">
    <img src="./img/KotaKinabalu.jpg">
  </div>
  <div class="slide-box">
    <img src="./img/Kurogawa.jpg"
  </div>
  `;

document.querySelector('.main-contents').appendChild(photos);

const showingClass = "showing";
const firstSlide = document.querySelectorAll('.slide-box')[0];
const slide = () => {
  const currentSlide = document.querySelector(`.${showingClass}`);
  if(currentSlide) {
    currentSlide.classList.remove(showingClass);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide) {
      nextSlide.classList.add(showingClass);
    } else {
      firstSlide.classList.add(showingClass);
    }
  } else {
    firstSlide.classList.add(showingClass);
  }
}

slide();
setInterval(slide, 2000);