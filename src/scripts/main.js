'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const coordsWall = wall.getBoundingClientRect();

const borderWidth = parseInt(getComputedStyle(wall)
.getPropertyValue('border-width'));

const wallX = coordsWall['x'] + borderWidth;
const wallY = coordsWall['y'] + borderWidth;
const wallW = coordsWall['width'] - 2 * borderWidth;
const wallH = coordsWall['height'] - 2 * borderWidth;

spider.style.top = wallY + 'px';
spider.style.left = wallX + 'px';
spider.style.position = 'fixed';

document.addEventListener('click', e => {
  const item = e.target;
  const itemParent = item.closest('.wall');

  if (itemParent === null) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  if (x < (wallX + spider.offsetWidth)) {
    spider.style.left = wallX + 'px';
  } else if (x > (wallX + wallW - spider.offsetWidth / 2)) {
    spider.style.left = wallX + wallW - spider.offsetWidth + 'px';
  } else {
    spider.style.left = x - (spider.offsetWidth / 2) + 'px';
  }

  if (y < (wallY + spider.offsetHeight)) {
    spider.style.top = wallY + 'px';
  } else if (y > (wallY + wallH - spider.clientHeight / 2)) {
    spider.style.top = wallY + wallH - spider.clientHeight + 'px';
  } else {
    spider.style.top = y - (spider.offsetHeight / 2) + 'px';
  }
});
