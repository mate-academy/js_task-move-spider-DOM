'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (evt) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const halfW = spiderRect.width / 2;
  const halfH = spiderRect.height / 2;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  const rawX = evt.clientX - wallRect.left - borderLeft - halfW;
  const rawY = evt.clientY - wallRect.top - borderTop - halfH;

  const maxX = wall.clientWidth - spiderRect.width;
  const maxY = wall.clientHeight - spiderRect.height;

  spider.style.left = Math.max(0, Math.min(rawX, maxX)) + 'px';
  spider.style.top = Math.max(0, Math.min(rawY, maxY)) + 'px';
});
