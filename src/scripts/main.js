'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  const newSpiderY = e.clientY - wallRect.top - spiderHeight / 2;
  const newSpiderX = e.clientX - wallRect.left - spiderWidth / 2;

  const clampedY = Math.min(Math.max(newSpiderY, 0), wallHeight - spiderHeight);
  const clampedX = Math.min(Math.max(newSpiderX, 0), wallWidth - spiderWidth);

  spider.style.position = 'absolute';
  spider.style.top = `${clampedY}px`;
  spider.style.left = `${clampedX}px`;
});
