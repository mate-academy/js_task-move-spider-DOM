'use strict';

document.addEventListener('click', (e) => {
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

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  x = Math.min(Math.max(x, 0), wallRect.width - spiderWidth);
  y = Math.min(Math.max(y, 0), wallRect.height - spiderHeight);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
