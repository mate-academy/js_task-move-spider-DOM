'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall || e.target === spider) {
    return;
  }

  let topShift = e.offsetY - (spider.clientHeight / 2);
  let leftShift = e.offsetX - (spider.clientWidth / 2);

  if (topShift < 0) {
    topShift = 0;
  }

  if (leftShift < 0) {
    leftShift = 0;
  }

  if (topShift > wall.clientHeight - spider.clientHeight) {
    topShift = wall.clientHeight - spider.clientHeight;
  }

  if (leftShift > wall.clientWidth - spider.clientWidth) {
    leftShift = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${topShift}px`;
  spider.style.left = `${leftShift}px`;
});
