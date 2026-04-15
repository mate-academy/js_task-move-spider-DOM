'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;

  const rect = wall.getBoundingClientRect();

  let x = e.clientX - rect.left - spiderW / 2;
  let y = e.clientY - rect.top - spiderH / 2;

  const maxX = wall.clientWidth - spiderW;
  const maxY = wall.clientHeight - spiderH;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
