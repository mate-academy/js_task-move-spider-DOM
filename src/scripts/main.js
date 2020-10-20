'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const leftBoundary = wall.offsetLeft + wall.clientLeft;
  const topBoundary = wall.offsetTop + wall.clientTop;

  let positionY = event.clientY - topBoundary - spider.offsetHeight / 2;
  let positionX = event.clientX - leftBoundary - spider.offsetWidth / 2;

  const widthDifference = wall.clientWidth - spider.offsetWidth;
  const heightDifference = wall.clientHeight - spider.offsetHeight;

  if (positionX < 0) {
    positionX = 0;
  } else if (positionX > widthDifference) {
    positionX = widthDifference;
  }

  if (positionY < 0) {
    positionY = 0;
  } else if (positionY > heightDifference) {
    positionY = heightDifference;
  }

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
