'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const maxLeft = wall.clientHeight - spider.clientHeight;
  const maxTop = wall.clientWidth - spider.clientWidth;
  const minLeftTop = 0;

  const newLeft = Math.min(Math.max(
    e.offsetX - spider.clientHeight / 2, minLeftTop), maxLeft);
  const newTop = Math.min(Math.max(
    e.offsetY - spider.clientWidth / 2, minLeftTop), maxTop);

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
