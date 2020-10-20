'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;

document.addEventListener('click', event => {
  const wall = event.target.closest('.wall');
  const positionX = event.offsetX - spiderWidth / 2;
  const positionY = event.offsetY - spiderWidth / 2;

  if (!wall.contains(event.target)) {
    return;
  }

  spider.style.left = `${calcSpiderPosition(positionX, wall.clientWidth)}px`;
  spider.style.top = `${calcSpiderPosition(positionY, wall.clientHeight)}px`;

  function calcSpiderPosition(coords, wallSide) {
    if (coords < 0) {
      return 0;
    } else if (coords > wallSide - spiderWidth) {
      return wallSide - spiderWidth;
    }

    return coords;
  }
});
