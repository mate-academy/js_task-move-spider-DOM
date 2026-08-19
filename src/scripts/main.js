'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderHH = spider.clientHeight / 2;
const spiderHW = spider.clientWidth / 2;

wall.addEventListener('click', (e) => {
  const wallDims = wall.getBoundingClientRect();
  const brdrLeft = wall.clientLeft;
  const brdrTop = wall.clientTop;
  const maxX = wallDims.right - spiderHW - brdrLeft;
  const minX = wallDims.left + spiderHW + brdrLeft;
  const minY = wallDims.top + spiderHH + brdrTop;
  const maxY = wallDims.bottom - spiderHH - brdrTop;

  const x = Math.max(minX, Math.min(e.clientX, maxX));
  const y = Math.max(minY, Math.min(e.clientY, maxY));

  spider.style.top = y - wallDims.top - brdrTop - spiderHH + 'px';
  spider.style.left = x - wallDims.left - brdrLeft - spiderHW + 'px';
});
