'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.x + wall.clientLeft;
  const wallY = wallPosition.y + wall.clientTop;
  const spider = document.querySelector('.spider');
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  let x = e.clientX - wallX - spider.offsetWidth / 2;
  let y = e.clientY - wallY - spider.offsetHeight / 2;

  if (wall.className !== 'wall') {
    return;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
