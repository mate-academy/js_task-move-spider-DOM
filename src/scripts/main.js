'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return false;
  }

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  const leftSpider = Math.min(Math.max(
    e.offsetX - spider.clientWidth / 2, 0,
  ), maxLeft);
  const topSpider = Math.min(Math.max(
    e.offsetY - spider.clientHeight / 2, 0,
  ), maxTop);

  spider.style.left = `${leftSpider}px`;
  spider.style.top = `${topSpider}px`;
});
