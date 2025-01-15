'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallField = e.target.closest('.wall');

  if (!wallField) {
    return;
  }

  let spiderX = clickX - wallRect.x - spiderRect.width / 2 - wall.clientLeft;
  let spiderY = clickY - wallRect.y - spiderRect.height / 2 - wall.clientTop;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  spiderX = Math.max(spiderX, 0);
  spiderX = Math.min(spiderX, maxX);
  spiderY = Math.max(spiderY, 0);
  spiderY = Math.min(spiderY, maxY);

  /* if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  } */

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
