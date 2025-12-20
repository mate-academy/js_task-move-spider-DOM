'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let y = e.clientY - spiderHeight / 2;
  let x = e.clientX - spiderWidth / 2;

  y = Math.max(wallRect.top, Math.min(y, wallRect.bottom - spiderHeight));

  x = Math.max(wallRect.left, Math.min(x, wallRect.right - spiderWidth));

  spider.style.position = 'fixed';
  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
