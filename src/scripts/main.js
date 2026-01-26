'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();
  const xRelative = e.clientX - wallRect.left;
  const yRelative = e.clientY - wallRect.top;
  let x = xRelative - spiderRect.width / 2;
  let y = yRelative - spiderRect.height / 2;

  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height));

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
