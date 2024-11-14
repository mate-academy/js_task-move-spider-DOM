'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const wallRect = wall.getBoundingClientRect();
  const wallLeft = wallRect.left;
  const wallTop = wallRect.top;
  const wallWidth = wallRect.width;
  const wallHeight = wallRect.height;

  const borderWidth = 10;

  let x = e.clientX - wallLeft - spiderWidth / 2 - borderWidth;
  let y = e.clientY - wallTop - spiderHeight / 2 - borderWidth;

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth - 2 * borderWidth));
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight - 2 * borderWidth));

  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
