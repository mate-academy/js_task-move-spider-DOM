'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const spiderSize = spider.offsetWidth;
  const spiderCenter = spiderSize / 2;

  const x = e.offsetX - spiderCenter;
  const y = e.offsetY - spiderCenter;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const maxX = wallWidth - spiderSize;
  const maxY = wallHeight - spiderSize;

  const finalX = Math.max(0, Math.min(x, maxX));
  const finalY = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
