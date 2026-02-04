'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
