'use strict';

const spider = document.querySelector('.spider');
const wallSize = document.querySelector('.wall').clientWidth;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const coordinateY = e.offsetY;
  const coordinateX = e.offsetX;
  const positionTop = coordinateY - spiderHeight / 2;
  const positionLeft = coordinateX - spiderWidth / 2;

  if (positionLeft < 0) {
    spider.style.left = '0';
  } else {
    spider.style.left = `${positionLeft}px`;
  }

  if (positionLeft > (wallSize - spiderWidth)) {
    spider.style.left = (wallSize - spiderWidth) + 'px';
  }

  if (positionTop < 0) {
    spider.style.top = '0';
  } else {
    spider.style.top = `${positionTop}px`;
  }

  if (positionTop > (wallSize - spiderHeight)) {
    spider.style.top = (wallSize - spiderHeight) + 'px';
  }
});
