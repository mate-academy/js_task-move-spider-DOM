'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const wallX = rect.left;
  const wallY = rect.top;
  const clientX = e.clientX;
  const clientY = e.clientY;
  let x = clientX - wallX - spider.offsetWidth / 2;
  let y = clientY - wallY - spider.offsetHeight / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
