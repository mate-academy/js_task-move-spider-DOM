'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallPosition = wall.getBoundingClientRect();

  let positionX = e.clientX - (wallPosition.x + wall.clientLeft);
  let positionY = e.clientY - (wallPosition.y + wall.clientTop);

  if (e.target !== wall && e.target !== spider) {
    return;
  }

  if (positionX - (spider.clientWidth / 2) < 0) {
    positionX = 0;
  } else {
    positionX = positionX - (spider.clientWidth / 2);
  }

  if (positionX + (spider.clientWidth) > wall.clientWidth) {
    positionX = wall.clientWidth - spider.clientWidth;
  }

  if (positionY - (spider.clientHeight) / 2 < 0) {
    positionY = 0;
  } else {
    positionY = positionY - (spider.clientHeight / 2);
  }

  if (positionY + (spider.clientHeight) > wall.clientHeight) {
    positionY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
