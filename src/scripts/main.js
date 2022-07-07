'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === wall) {
    const wallCoords = wall.getBoundingClientRect();
    const halfSpiderWidth = spider.clientWidth / 2;
    const halfSpiderHeight = spider.clientHeight / 2;
    let leftValue = e.clientX - wallCoords.left - wall.clientLeft;
    let topValue = e.clientY - wallCoords.top - wall.clientTop;

    if (leftValue <= halfSpiderWidth) {
      leftValue = halfSpiderWidth;
    } else if (leftValue + halfSpiderWidth > wall.clientWidth) {
      leftValue = wall.clientWidth - halfSpiderWidth;
    }

    if (topValue <= halfSpiderHeight) {
      topValue = halfSpiderHeight;
    } else if (topValue + halfSpiderHeight > wall.clientHeight) {
      topValue = wall.clientHeight - halfSpiderHeight;
    }

    spider.style.left = leftValue - halfSpiderWidth + 'px';
    spider.style.top = topValue - halfSpiderHeight + 'px';
  }
});
