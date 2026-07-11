'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let x = e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
