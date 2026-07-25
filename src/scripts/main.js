'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;
  const rect = wall.getBoundingClientRect();

  let positionY =
    e.clientY - wall.clientTop - rect.top - spider.clientHeight / 2;
  let positionX =
    e.clientX - wall.clientLeft - rect.left - spider.clientWidth / 2;

  if (positionY < 0) {
    positionY = 0;
  } else if (positionY > maxY) {
    positionY = maxY;
  }

  if (positionX < 0) {
    positionX = 0;
  } else if (positionX > maxX) {
    positionX = maxX;
  }

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
