'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  const topSpiderPosition = Math.min(Math.max(
    e.offsetY - spider.clientHeight / 2, 0,
  ), maxTop);
  const leftSpiderPosition = Math.min(Math.max(
    e.offsetX - spider.clientWidth / 2, 0,
  ), maxLeft);


  spider.style.top = `${topSpiderPosition}px`;
  spider.style.left = `${leftSpiderPosition}px`;
});
