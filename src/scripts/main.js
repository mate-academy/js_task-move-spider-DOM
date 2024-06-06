'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallWalls = wall.getBoundingClientRect();

  const coords = {
    x:
      e.clientX -
      wallWalls.left -
      parseInt(getComputedStyle(wall).borderLeftWidth),
    y:
      e.clientY -
      wallWalls.top -
      parseInt(getComputedStyle(wall).borderTopWidth),
  };

  const leftPosition = Math.max(
    0,
    Math.min(
      coords.x - spider.clientWidth / 2,
      wall.clientWidth - spider.clientWidth,
    ),
  );

  const topPosition = Math.max(
    0,
    Math.min(
      coords.y - spider.clientHeight / 2,
      wall.clientHeight - spider.clientHeight,
    ),
  );

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
