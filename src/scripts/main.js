'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderRect = spider.getBoundingClientRect();

  const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);

  const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);

  let x = e.clientX - wallRect.left - spiderRect.width / 2 - borderLeft;

  let y = e.clientY - wallRect.top - spiderRect.height / 2 - borderTop;

  const maxX = wall.clientWidth - spiderRect.width;

  const maxY = wall.clientHeight - spiderRect.height;

  x = Math.max(0, Math.min(x, maxX));

  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;

  spider.style.top = `${y}px`;
});
