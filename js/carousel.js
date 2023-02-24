const photo = document.createElement('div');
const photos = ["./img/Fukuoka.jpg", "./img/Osaka.jpg", "./img/KotaKinabalu.jpg", "./img/Kurogawa.jpg"];

const paintPhotos = () => {
  return photos.map(src => {
    return `
      <div class="slide-box">
        <img src=${src}>
      </div>
    `;
  }).join("");
}

photo.className = 'main-photos';
photo.innerHTML  = paintPhotos();  

document.querySelector('.main-contents').appendChild(photo);

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