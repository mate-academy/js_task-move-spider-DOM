'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const leftBoundary = wall.offsetLeft + wall.clientLeft;
  const topBoundary = wall.offsetTop + wall.clientTop;
  let posY = event.clientY - topBoundary - spider.offsetHeight / 2;
  let posX = event.clientX - leftBoundary - spider.offsetWidth / 2;

  if (posX < 0) {
    posX = 0;
  } else if (posX > wall.clientWidth - spider.offsetWidth) {
    posX = wall.clientWidth - spider.offsetWidth;
  }

  if (posY < 0) {
    posY = 0;
  } else if (posY > wall.clientHeight - spider.offsetHeight) {
    posY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.top = `${posY}px`;
  spider.style.left = `${posX}px`;
});
