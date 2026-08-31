'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  let xCoordinate =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let yCoordinate =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  if (xCoordinate < 0) {
    xCoordinate = 0;
  }

  if (xCoordinate > wall.clientWidth - spider.offsetWidth) {
    xCoordinate = wall.clientWidth - spider.offsetWidth;
  }

  if (yCoordinate > wall.clientHeight - spider.offsetHeight) {
    yCoordinate = wall.clientHeight - spider.offsetHeight;
  }

  if (yCoordinate < 0) {
    yCoordinate = 0;
  }

  if (e.target.closest('.wall') !== wall) {
    return;
  }

  spider.style.left = `${xCoordinate}px`;
  spider.style.top = `${yCoordinate}px`;
});
