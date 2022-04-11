'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;
  const xMax = wall.clientWidth - spider.clientWidth;
  const yMax = wall.clientHeight - spider.clientHeight;

  x = Math.min(Math.max(x, 0), xMax);
  y = Math.min(Math.max(y, 0), yMax);

  if (!e.target.classList.contains('wall')) {
    return;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
