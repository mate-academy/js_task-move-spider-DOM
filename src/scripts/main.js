'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const x = e.offsetX - spider.offsetWidth / 2;
  const y = e.offsetY - spider.offsetHeight / 2;

  const left = Math.max(0, Math.min(wall.clientWidth - spider.offsetWidth, x));
  const t = Math.max(0, Math.min(wall.clientHeight - spider.offsetHeight, y));

  spider.style.left = left + 'px';
  spider.style.top = t + 'px';
});
