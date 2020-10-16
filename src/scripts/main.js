'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  const maxY = wall.offsetTop + wall.clientTop;
  const maxX = wall.offsetLeft + wall.clientLeft;
  const spiderHalf = spider.offsetWidth / 2;

  let yCoordinate = event.clientY - maxY - spiderHalf;
  let xCoordinate = event.clientX - maxX - spiderHalf;

  if (yCoordinate > wall.clientHeight - spider.offsetHeight) {
    yCoordinate = wall.clientHeight - spider.offsetHeight;
  } else if (yCoordinate < 0) {
    yCoordinate = 0;
  }

  if (xCoordinate > wall.clientWidth - spider.offsetWidth) {
    xCoordinate = wall.clientWidth - spider.offsetWidth;
  } else if (xCoordinate < 0) {
    xCoordinate = 0;
  }

  spider.style.top = yCoordinate + 'px';
  spider.style.left = xCoordinate + 'px';
});
