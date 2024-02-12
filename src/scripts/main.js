'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === wall) {
    const maxLeft = wall.clientHeight - spider.clientHeight;
    const maxTop = wall.clientWidth - spider.clientWidth;

    const minLeftTop = 0;

    const pozLeft = e.offsetX - spider.clientHeight / 2;
    const pozTop = e.offsetY - spider.clientWidth / 2;

    if (pozLeft > maxLeft) {
      spider.style.left = maxLeft + 'px';
    } else if (pozLeft < minLeftTop) {
      spider.style.left = minLeftTop + 'px';
    } else {
      spider.style.left = pozLeft + 'px';
    }

    if (pozTop > maxTop) {
      spider.style.top = maxTop + 'px';
    } else if (pozTop < minLeftTop) {
      spider.style.top = minLeftTop + 'px';
    } else {
      spider.style.top = pozTop + 'px';
    }
  }
});
