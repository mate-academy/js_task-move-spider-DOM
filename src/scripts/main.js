'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;
  const centerLeft = x - spider.offsetWidth / 2;
  const centerTop = y - spider.offsetHeight / 2;

  spider.style.left = `${Math.max(0, Math.min(centerLeft, wall.clientWidth - spider.offsetWidth))}px`;
  spider.style.top = `${Math.max(0, Math.min(centerTop, wall.clientHeight - spider.offsetHeight))}px`;
});
