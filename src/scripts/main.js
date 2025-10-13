'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  wall.addEventListener('click', (e) => {
    let topValue =
      e.clientY - wallCoords.y - wall.clientLeft - spider.clientWidth / 2;
    let leftValue =
      e.clientX - wallCoords.x - wall.clientTop - spider.clientHeight / 2;

    if (topValue < 0) {
      topValue = 0;
    }

    if (leftValue < 0) {
      leftValue = 0;
    }

    if (topValue > wall.clientHeight - spider.clientHeight) {
      topValue = wall.clientHeight - spider.clientHeight;
    }

    if (leftValue > wall.clientWidth - spider.clientWidth) {
      leftValue = wall.clientWidth - spider.clientWidth;
    }

    spider.style.top = topValue + 'px';
    spider.style.left = leftValue + 'px';
  });
});
