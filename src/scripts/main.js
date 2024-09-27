'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (ev) => {
    const wallX = wall.clientWidth;
    const wallY = wall.clientHeight;
    const spiderX = spider.clientWidth;
    const spiderY = spider.clientHeight;
    const clickX = ev.offsetX;
    const clickY = ev.offsetY;
    const maxX = wallX - spiderX;
    const maxY = wallY - spiderY;

    spider.style.left =
      Math.max(0, Math.min(clickX - spiderX / 2, maxX)) + 'px';
    spider.style.top = Math.max(0, Math.min(clickY - spiderY / 2, maxY)) + 'px';
    spider.style.position = 'absolute';
  });
});
