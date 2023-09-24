'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxX = wall.clientWidth - spider.offsetHeight;
const maxY = wall.clientHeight - spider.offsetHeight;
const minX = 0;
const minY = 0;

wall.addEventListener('click', e => {
  let topShift = `${(e.offsetY) - (spider.offsetHeight / 2)}`;
  let leftShift = `${(e.offsetX) - (spider.offsetWidth / 2)}`;

  if (topShift > maxY) {
    topShift = maxY;
  }

  if (leftShift > maxX) {
    leftShift = maxX;
  }

  if (topShift < minY) {
    topShift = minY;
  }

  if (leftShift < minX) {
    leftShift = minX;
  }

  spider.style.top = `${topShift}px`;
  spider.style.left = `${leftShift}px`;
});
