'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  let x = e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
