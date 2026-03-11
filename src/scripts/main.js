'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const borderTop = wall.clientTop;
  const borderLeft = wall.clientLeft;

  let x = e.clientX - rect.left - borderLeft - spider.offsetWidth / 2;
  let y = e.clientY - rect.top - borderTop - spider.offsetHeight / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
