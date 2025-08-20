'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const rect = wall.getBoundingClientRect();
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;

  const targetX = localX - spiderWidth / 2;
  const clampedX = Math.min(targetX, rect.width - spiderWidth);
  const x = Math.max(0, clampedX);

  const targetY = localY - spiderHeight / 2;
  const clampedY = Math.min(targetY, rect.height - spiderHeight);
  const y = Math.max(0, clampedY);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
