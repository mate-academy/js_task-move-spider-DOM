'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === wall) {
    const wallCoords = wall.getBoundingClientRect();
    let leftValue = e.clientX - wallCoords.left - wall.clientLeft;
    let topValue = e.clientY - wallCoords.top - wall.clientTop;

    if (leftValue < 0) {
      leftValue = 0;
    } else if (leftValue + spider.clientWidth > wall.clientWidth) {
      leftValue = wall.clientWidth - spider.clientWidth;
    }

    if (topValue < 0) {
      topValue = 0;
    } else if (topValue + spider.clientHeight > wall.clientHeight) {
      topValue = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = leftValue + 'px';
    spider.style.top = topValue + 'px';
  }
});
