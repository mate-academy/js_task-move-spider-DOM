'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const coordsWall = wall.getBoundingClientRect();

const borderWidth = parseInt(getComputedStyle(wall)
  .getPropertyValue('border-width'));

const wallW = coordsWall['width'] - 2 * borderWidth;
const wallH = coordsWall['height'] - 2 * borderWidth;
const wallXLeft = coordsWall['x'] + borderWidth;
const wallXRight = wallXLeft + wallW;
const wallYTop = coordsWall['y'] + borderWidth;
const wallYBottom = wallYTop + wallH;

spider.style.top = wallYTop + 'px';
spider.style.left = wallXLeft + 'px';
spider.style.position = 'fixed';
const spiderHHalf = spider.offsetHeight / 2;
const spiderWHalf = spider.offsetWidth / 2;

document.addEventListener('click', e => {
  const item = e.target;
  const itemParent = item.closest('.wall');

  if (itemParent === null) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  if (x < (wallXLeft + spider.offsetWidth)) {
    spider.style.left = wallXLeft + 'px';
  } else if (x > (wallXRight - spiderWHalf)) {
    spider.style.left = wallXRight - spider.offsetWidth + 'px';
  } else {
    spider.style.left = x - spiderWHalf + 'px';
  }

  if (y < (wallYTop + spider.offsetHeight)) {
    spider.style.top = wallYTop + 'px';
  } else if (y > (wallYBottom - spiderHHalf)) {
    spider.style.top = wallYBottom - spider.clientHeight + 'px';
  } else {
    spider.style.top = y - spiderHHalf + 'px';
  }
});
