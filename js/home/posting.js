const posting = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg'];
const newPost = posting.reverse();

const paintGrid = () => {
  return newPost.map((image)=>{
    return `
      <div class="grid-item">
        <img src=${image} class="grid-img">
      </div>
      `;
    }).join("");
  }
  
const grid = document.createElement('div');
grid.className = 'grid block';
grid.innerHTML = paintGrid();

document.querySelector('.main-grid').appendChild(grid);