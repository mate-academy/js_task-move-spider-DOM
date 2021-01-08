'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const leftEdge = wall.offsetLeft + wall.clientLeft;
  const topEdge = wall.offsetTop + wall.clientTop;

  let positionX = e.clientX - leftEdge - spider.offsetWidth / 2;
  let positionY = e.clientY - topEdge - spider.offsetHeight / 2;

  if (positionX < 0) {
    positionX = 0;
  } else if (positionX > wall.clientWidth - spider.offsetWidth) {
    positionX = wall.clientWidth - spider.offsetWidth;
  }

  if (positionY < 0) {
    positionY = 0;
  } else if (positionY > wall.clientHeight - spider.offsetHeight) {
    positionY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
