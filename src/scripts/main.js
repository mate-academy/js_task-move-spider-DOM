'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const wallX = wallCoords.x + wall.clientLeft;
  const wallY = wallCoords.y + wall.clientLeft;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientWidth - spider.clientWidth;
  let x = e.clientX - wallX - spider.offsetWidth / 2;
  let y = e.clientY - wallY - spider.offsetWidth / 2;

  x = Math.max(x, 0);
  x = Math.min(x, maxX);

  y = Math.max(y, 0);
  y = Math.min(y, maxY);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
