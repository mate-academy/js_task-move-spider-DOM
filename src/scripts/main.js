'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallPosition = wall.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  const clickX = e.x;
  const clickY = e.y;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const spiderCoords = {
    left: clickX - wallPosition.x - wall.clientLeft - spiderWidth / 2,
    top: clickY - wallPosition.y - wall.clientTop - spiderHeight / 2,
  };

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  } else if (spiderCoords.left > maxLeft) {
    spiderCoords.left = maxLeft;
  }

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  } else if (spiderCoords.top > maxTop) {
    spiderCoords.top = maxTop;
  }

  spider.style.left = `${spiderCoords.left}px`;
  spider.style.top = `${spiderCoords.top}px`;
});
