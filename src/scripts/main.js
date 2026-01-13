'use strict';

const checkInWall = (v, min, max) => Math.min(Math.max(v, min), max);

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const wallBorderX = (wall.offsetWidth - wall.clientWidth) / 2;
  const wallBorderY = (wall.offsetHeight - wall.clientHeight) / 2;

  const spiderLeft = checkInWall(
    e.clientX - wallRect.x - wallBorderX - spider.offsetWidth / 2,
    0,
    wall.clientWidth - spider.offsetWidth,
  );

  const spiderTop = checkInWall(
    e.clientY - wallRect.y - wallBorderY - spider.offsetHeight / 2,
    0,
    wall.clientHeight - spider.offsetHeight,
  );

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
