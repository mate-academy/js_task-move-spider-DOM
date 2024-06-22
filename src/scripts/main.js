'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const spiderX = e.offsetX - spider.clientWidth / 2;
  const spiderY = e.offsetY - spider.clientHeight / 2;

  const mathMinY = Math.min(maxY, spiderY);
  const mathMaxY = Math.max(0, mathMinY);

  const mathMinX = Math.min(maxX, spiderX);
  const mathMaxX = Math.max(0, mathMinX);

  spider.style.top = `${mathMaxY}px`;
  spider.style.left = `${mathMaxX}px`;
});
