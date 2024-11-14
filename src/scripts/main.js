'use strict';

document.addEventListener('click', (e) => {
  // write code here
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderCentered = spider.clientWidth / 2;

  let targetX = e.offsetX - spiderCentered;
  let targetY = e.offsetY - spiderCentered;

  targetX = Math.max(
    0,
    Math.min(targetX, wall.clientWidth - spider.clientWidth),
  );

  targetY = Math.max(
    0,
    Math.min(targetY, wall.clientHeight - spider.clientHeight),
  );

  if (!wall.contains(e.target)) {
    return;
  }

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
