'use strict';

const wall = document.querySelector('.wall');
const wallOffsetLeft = wall.offsetLeft;
const wallOffsetTop = wall.offsetTop;
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const borderWidth = 10;

const spider = document.querySelector('.spider');
const halfSpiderWidth = spider.offsetWidth / 2;
const halfSpiderHeight = spider.offsetHeight / 2;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return
  }
  const x = checkClick(e.clientX, wallOffsetLeft, halfSpiderWidth);
  const y = checkClick(e.clientY, wallOffsetTop, halfSpiderHeight);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});

function checkClick(coords, wallCoords, spiderSize) {
  let totalCoords = 0;
  
  switch (true) {
    case coords - wallCoords + borderWidth <= spiderSize * 2:
      totalCoords = 0;
      break;
      
      case coords > wallCoords + wallWidth - borderWidth * 2 - spiderSize:
      totalCoords = wallWidth - borderWidth * 2 - spiderSize * 2;
      break;

    default:
      totalCoords = coords - wallCoords - borderWidth - spiderSize;
      break;
  }

  return totalCoords;
}
