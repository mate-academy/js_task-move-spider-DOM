'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  const xWall = e.clientX - wallRect.left;
  const yWall = e.clientY - wallRect.top;

  const spiderCenterW = spider.offsetWidth / 2;
  const spiderCenterH = spider.offsetHeight / 2;

  const clickX = xWall - spiderCenterW;
  const clickY = yWall - spiderCenterH;

  const left = Math.min(
    wallRect.width - spider.offsetWidth,
    Math.max(0, clickX),
  );

  const up = Math.min(
    wallRect.height - spider.offsetHeight,
    Math.max(0, clickY),
  );

  spider.style.position = 'absolute';
  spider.style.left = left + 'px';
  spider.style.top = up + 'px';
});
