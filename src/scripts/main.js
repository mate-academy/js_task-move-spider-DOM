'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
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

  const goToX = Math.max(0, Math.min(clickX - spiderX / 2, maxX));
  const goToY = Math.max(0, Math.min(clickY - spiderY / 2, maxY));

  spider.style.top = `${goToY}px`;
  spider.style.left = `${goToX}px`;
});
