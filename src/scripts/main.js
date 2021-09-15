'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const x = event.clientX;
  const y = event.clientY;
  const wallCoords = wall.getBoundingClientRect();

  if (x < wallCoords.left || x > wallCoords.right || y < wallCoords.top
      || y > wallCoords.bottom) {
    return;
  }

  let spiderLeft = x - wallCoords.left - wall.clientLeft
    - spider.clientWidth / 2;
  let spiderTop = y - wallCoords.top - wall.clientTop - spider.clientHeight / 2;

  if (x < wallCoords.left + wall.clientLeft + spider.clientWidth / 2) {
    spiderLeft = 0;
  }

  if (y < wallCoords.top + wall.clientTop + spider.clientHeight / 2) {
    spiderTop = 0;
  }

  if (x > wallCoords.left + wall.clientLeft + wall.clientWidth
      - spider.clientWidth / 2) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  if (y > wallCoords.top + wall.clientTop + wall.clientHeight
      - spider.clientHeight / 2) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
