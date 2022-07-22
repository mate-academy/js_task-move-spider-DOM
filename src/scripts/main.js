'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallCoordinates = wall.getBoundingClientRect();

const halfOfSpiderWidth = spider.clientWidth / 2;
const halfOfSpiderHeight = spider.clientHeight / 2;

document.addEventListener('click', e => {
  if (e.target === wall) {
    let fromLeft = e.clientX - wallCoordinates.left - wall.clientLeft;
    let fromTop = e.clientY - wallCoordinates.top - wall.clientTop;

    if (fromLeft <= halfOfSpiderWidth) {
      fromLeft = halfOfSpiderWidth;
    } else if (fromLeft + halfOfSpiderWidth > wall.clientWidth) {
      fromLeft = wall.clientWidth - halfOfSpiderWidth;
    }

    if (fromTop <= halfOfSpiderHeight) {
      fromTop = halfOfSpiderHeight;
    } else if (fromTop + halfOfSpiderHeight > wall.clientHeight) {
      fromTop = wall.clientHeight - halfOfSpiderHeight;
    }

    spider.style.left = fromLeft - halfOfSpiderWidth + 'px';
    spider.style.top = fromTop - halfOfSpiderHeight + 'px';
  }
});
