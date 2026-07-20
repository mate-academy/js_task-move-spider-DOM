'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallPosition = wall.getBoundingClientRect();
  const clickXInsideWall = e.clientX - wallPosition.left;
  const clickYInsideWall = e.clientY - wallPosition.top;
  const spiderX = clickXInsideWall - spider.offsetWidth / 2;
  const spiderY = clickYInsideWall - spider.offsetHeight / 2;

  const clampedX = Math.max(
    0,
    Math.min(spiderX, wall.offsetWidth - spider.offsetWidth),
  );
  const clampedY = Math.max(
    0,
    Math.min(spiderY, wall.offsetHeight - spider.offsetHeight),
  );

  spider.style.left = clampedX + 'px';
  spider.style.top = clampedY + 'px';
});
