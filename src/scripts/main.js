'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!wall || !spider) {
    return;
  }

  const rect = wall.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
    return;
  }

  const localX = x - rect.left - wall.clientLeft;
  const localY = y - rect.top - wall.clientTop;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const spiderCenterX = localX - spiderWidth / 2;
  const spiderCenterY = localY - spiderHeight / 2;

  const leftS = Math.min(Math.max(spiderCenterX, 0), wallWidth - spiderWidth);
  const topS = Math.min(Math.max(spiderCenterY, 0), wallHeight - spiderHeight);

  spider.style.top = `${topS}px`;
  spider.style.left = `${leftS}px`;
});
