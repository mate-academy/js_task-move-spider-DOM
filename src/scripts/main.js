'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = spider.parentElement;

  if (e.target !== wall) {
    return;
  }

  const wallY = wall.clientHeight;
  const wallX = wall.clientWidth;
  const spiderY = spider.clientHeight;
  const spiderX = spider.clientWidth;
  const clickY = e.offsetY;
  const clickX = e.offsetX;

  const maxX = wallX - spiderX;
  const maxY = wallY - spiderY;

  spider.style.top = Math.max(0, Math.min(clickY - spiderY / 2, maxY)) + 'px';
  spider.style.left = Math.max(0, Math.min(clickX - spiderX / 2, maxX)) + 'px';
});
