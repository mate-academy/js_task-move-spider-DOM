'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const targetX = Math.min(
    Math.max(e.offsetX - spiderWidth / 2, 0),
    wallWidth - spiderWidth,
  );

  const targetY = Math.min(
    Math.max(e.offsetY - spiderHeight / 2, 0),
    wallHeight - spiderHeight,
  );

  spider.style.top = `${Math.round(targetY)}px`;
  spider.style.left = `${Math.round(targetX)}px`;
});
