'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const spiderX = Math.min(
    wallRect.right - spiderWidth,
    Math.max(wallRect.left, mouseX - spiderWidth / 2),
  );

  const spiderY = Math.min(
    wallRect.bottom - spiderHeight,
    Math.max(wallRect.top, mouseY - spiderHeight / 2),
  );

  spider.style.position = 'absolute';

  spider.style.left = `${spiderX - wallRect.left}px`;
  spider.style.top = `${spiderY - wallRect.top}px`;
});
