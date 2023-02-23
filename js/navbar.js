

const navBtn = document.querySelectorAll('.navBtn');

navBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    navBtn.forEach((rmbtn)=>{
      rmbtn.classList.remove('onclick-navBtn');
    })
    btn.classList.add('onclick-navBtn')
  })
})