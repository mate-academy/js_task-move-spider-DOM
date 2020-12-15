'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const boundMinX = wall.offsetLeft + wall.clientLeft;
  const boundMinY = wall.offsetTop + wall.clientTop;
  const boundMaxX = wall.offsetLeft + wall.clientWidth;
  const boundMaxY = wall.offsetTop + wall.clientHeight;

  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetWidth;

  let moveX = e.clientX - spiderW / 2;
  let moveY = e.clientY - spiderH / 2;

  moveX = moveX > boundMinX
    ? (e.clientX < boundMaxX - spiderW / 2
      ? moveX - boundMinX : boundMaxX - wall.offsetLeft - spiderW)
    : 0;

  moveY = moveY > boundMinY
    ? (e.clientY < boundMaxY - spiderH / 2
      ? moveY - boundMinY : boundMaxY - wall.offsetTop - spiderH)
    : 0;

  spider.style.top = moveY + 'px';
  spider.style.left = moveX + 'px';
});
