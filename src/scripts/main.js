'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const wallGapVertical = wall.offsetTop + wall.clientTop;
  const wallGapHorizontal = wall.offsetLeft + wall.clientLeft;

  let xLocation = event.clientX - wallGapHorizontal - spider.offsetWidth / 2;
  let yLocation = event.clientY - wallGapVertical - spider.offsetHeight / 2;

  if (xLocation > wall.clientWidth - spider.offsetWidth) {
    xLocation = wall.clientWidth - spider.offsetWidth;
  }

  if (yLocation > wall.clientHeight - spider.offsetHeight) {
    yLocation = wall.clientHeight - spider.offsetHeight;
  }

  if (xLocation < 0) {
    xLocation = 0;
  }

  if (yLocation < 0) {
    yLocation = 0;
  }

  spider.style.left = `${xLocation}px`;
  spider.style.top = `${yLocation}px`;
});
