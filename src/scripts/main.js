'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();

  if (!wall.contains(e.target)) {
    return;
  }

  const newCoords = {
    x: e.clientX - wallSize.left - wall.clientLeft - spider.offsetWidth / 2,
    y: e.clientY - wallSize.top - wall.clientTop - spider.offsetHeight / 2,
  };

  if (newCoords.x < 0) {
    newCoords.x = 0;
  }

  if (newCoords.x > wallSize.width - spider.clientWidth - wall.clientLeft * 2) {
    newCoords.x = wallSize.width - spider.clientWidth - wall.clientLeft * 2;
  }

  if (newCoords.y < 0) {
    newCoords.y = 0;
  }

  if (
    newCoords.y >
    wallSize.height - spider.clientHeight - wall.clientTop * 2
  ) {
    newCoords.y = wallSize.height - spider.clientHeight - wall.clientTop * 2;
  }

  spider.style.left = `${newCoords.x}px`;
  spider.style.top = `${newCoords.y}px`;
});
