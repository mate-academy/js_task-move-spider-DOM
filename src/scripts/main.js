'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = x - wallRect.left - spiderRect.width / 2;
  let newTop = y - wallRect.top - spiderRect.height / 2;

  newLeft = Math.max(0, Math.min(wallRect.width - spiderRect.width, newLeft));
  newTop = Math.max(0, Math.min(wallRect.height - spiderRect.height, newTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
