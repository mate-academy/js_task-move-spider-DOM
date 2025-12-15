'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const targetX = Math.min(
    Math.max(clickX - spiderWidth / 2, 0),
    wall.clientWidth - spiderWidth,
  );

  const targetY = Math.min(
    Math.max(clickY - spiderHeight / 2, 0),
    wall.clientHeight - spiderHeight,
  );

  spider.style.left = `${Math.round(targetX)}px`;
  spider.style.top = `${Math.round(targetY)}px`;
});
