'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const wallGapVertical = wall.offsetTop + wall.clientTop;
  const wallGapHorizontal = wall.offsetLeft + wall.clientLeft;

  let x = event.clientX - wallGapHorizontal - spider.offsetWidth / 2;
  let y = event.clientY - wallGapVertical - spider.offsetHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > wall.clientWidth - spider.offsetWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wall.clientHeight - spider.offsetHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
