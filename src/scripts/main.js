'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const innerOffsetX = wallRect.left + (wall.clientLeft || 0);
  const innerOffsetY = wallRect.top + (wall.clientTop || 0);
  const centerClickX = e.clientX - innerOffsetX;
  const centerClickY = e.clientY - innerOffsetY;

  const spiderLeft = centerClickX - spider.offsetWidth / 2;
  const spiderTop = centerClickY - spider.offsetHeight / 2;

  const maxTop = Math.max(
    0,
    Math.min(wall.clientHeight - spider.offsetHeight, spiderTop),
  );
  const maxLeft = Math.max(
    0,
    Math.min(wall.clientWidth - spider.offsetWidth, spiderLeft),
  );

  spider.style.left = `${maxLeft}px`;
  spider.style.top = `${maxTop}px`;
});
