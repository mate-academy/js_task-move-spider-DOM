'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallGapVertical = wall.offsetTop + wall.clientTop;
const wallGapHorizontal = wall.offsetLeft + wall.clientLeft;

wall.addEventListener('click', event => {
  let x = event.clientX - wallGapHorizontal - spider.clientWidth / 2;
  let y = event.clientY - wallGapVertical - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > wall.clientWidth - spider.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wall.clientHeight - spider.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
