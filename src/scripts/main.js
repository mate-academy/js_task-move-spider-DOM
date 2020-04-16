'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== spider && e.target !== wall) {
    return;
  }

  const wallPos = wall.getBoundingClientRect();
  const wallX = wallPos.x + wall.clientLeft;
  const wallY = wallPos.y + wall.clientTop;

  let x = e.clientX - wallX - (spider.offsetWidth / 2);
  let y = e.clientY - wallY - (spider.offsetHeight / 2);

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
