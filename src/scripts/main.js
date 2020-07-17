'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();
  const wallX = wallCoords.x + wall.clientLeft;
  const wallY = wallCoords.y + wall.clientLeft;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientWidth - spider.clientWidth;
  let x = e.clientX - wallX - spider.offsetWidth / 2;
  let y = e.clientY - wallY - spider.offsetWidth / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
