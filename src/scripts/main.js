'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();

  let coordX =
    e.clientX - wallCoords.left - spider.clientWidth / 2 - wall.clientLeft;
  let coordY =
    e.clientY - wallCoords.top - spider.clientHeight / 2 - wall.clientTop;

  coordX = Math.max(0, Math.min(coordX, wall.clientWidth - spider.clientWidth));

  coordY = Math.max(
    0,
    Math.min(coordY, wall.clientHeight - spider.clientHeight),
  );

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
