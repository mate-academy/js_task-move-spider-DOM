'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;

  const x = e.offsetX - spiderW / 2;
  const y = e.offsetY - spiderH / 2;

  const maxX = wall.clientWidth - spiderW;
  const maxY = wall.clientHeight - spiderH;

  spider.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
  spider.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
});
