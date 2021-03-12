'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderCenterY = spider.clientHeight / 2;
const spiderCenterX = spider.clientWidth / 2;

document.addEventListener('click', clickEvent => {
  // write code here

  if (clickEvent.target !== wall) {
    return;
  }

  const spiderCoords = {
    top: clickEvent.offsetY - spiderCenterY,
    left: clickEvent.offsetX - spiderCenterX,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
