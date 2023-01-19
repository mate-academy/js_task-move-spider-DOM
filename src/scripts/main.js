'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;
  const wallCoords = wall.getBoundingClientRect();
  let spiderTop = y - wallCoords.top;
  const spiderLeft = x - wallCoords.left;

  if (spiderTop < wallCoords.top + wall.clientTop) {
    spiderTop = wallCoords.top;
  }

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
  spider.style.transform = 'translate(-50%, -50%)';

  // const wallPositionX = wallCoords.left + wall.clientLeft;

  // console.log(wall.clientLeft);
});
