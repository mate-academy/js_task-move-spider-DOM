/* eslint-disable no-console */
'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderCenter = spider.clientWidth / 2;

  if (!wall.contains(e.target)) {
    return;
  }

  let targetX = e.offsetX - spiderCenter;
  let targetY = e.offsetY - spiderCenter;

  targetX = Math.max(
    0,
    Math.min(targetX, wall.clientWidth - spider.clientWidth),
  );

  targetY = Math.max(
    0,
    Math.min(targetY, wall.clientHeight - spider.clientHeight),
  );

  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;

  console.log(e.offsetY, e.offsetX, spiderCenter);
});
