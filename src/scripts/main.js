'use strict';

document.querySelector('.wall').addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const xShift = wall.offsetLeft + wall.clientLeft + spider.offsetWidth / 2;
  const yShift = wall.offsetTop + wall.clientTop + spider.offsetHeight / 2;

  let x = e.clientX - xShift;
  let y = e.clientY - yShift;

  x = Math.max(0, x);
  y = Math.max(0, y);

  x = Math.min(x, wall.clientWidth - spider.offsetWidth);
  y = Math.min(y, wall.clientHeight - spider.offsetHeight);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
