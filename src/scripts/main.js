'use strict';

const wall = document.querySelector('div');
const spider = document.querySelector('img');

wall.addEventListener('click', (e) => {
  const coords = wall.getBoundingClientRect();

  const style = window.getComputedStyle(wall);
  const border = parseInt(style.border);

  let x = e.clientX - coords.x - spider.offsetWidth / 2 - border;
  let y = e.clientY - coords.y - spider.offsetHeight / 2 - border;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
