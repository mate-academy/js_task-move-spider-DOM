'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (getComputedStyle(wall).position !== 'relative') {
  wall.style.position = 'relative';
}

if (getComputedStyle(spider).position !== 'absolute') {
  spider.style.position = 'absolute';
}

wall.addEventListener('click', (e) => {
  const coordsWall = wall.getBoundingClientRect();

  const widthSpider = spider.clientWidth;
  const heightSpider = spider.clientHeight;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const maxWallX = e.clientX - coordsWall.left;
  const maxWallY = e.clientY - coordsWall.top;

  const spiderCenterX = maxWallX - widthSpider / 2 - wall.clientLeft;
  const spiderCenterY = maxWallY - heightSpider / 2 - wall.clientTop;

  const maxX = Math.max(0, Math.min(spiderCenterX, wallWidth - widthSpider));
  const maxY = Math.max(0, Math.min(spiderCenterY, wallHeight - heightSpider));

  spider.style.top = maxY + 'px';
  spider.style.left = maxX + 'px';
});
