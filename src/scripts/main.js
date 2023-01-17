'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const boundaries = wall.getBoundingClientRect();
const horisontalStart = boundaries.left + window.pageXOffset + wall.clientLeft;
const verticalStart = boundaries.top + window.pageYOffset + wall.clientTop;
const maxXCoordinate = wall.clientWidth - spider.offsetWidth;
const maxYCoordinate = wall.clientHeight - spider.offsetHeight;

document.addEventListener('click', e => {
  let coordinateX = (e.clientX + window.pageXOffset)
    - horisontalStart - spider.offsetWidth / 2;
  let coordinateY = (e.clientY + window.pageYOffset)
    - verticalStart - spider.offsetHeight / 2;

  if (document.elementFromPoint(e.clientX, e.clientY) === document.body) {
    return;
  }

  if (coordinateX <= 0) {
    coordinateX = 0;
  }

  if (coordinateX >= maxXCoordinate) {
    coordinateX = maxXCoordinate;
  }

  if (coordinateY <= 0) {
    coordinateY = 0;
  }

  if (coordinateY >= maxYCoordinate) {
    coordinateY = maxYCoordinate;
  }

  spider.style.left = `${coordinateX}px`;
  spider.style.top = `${coordinateY}px`;
});
