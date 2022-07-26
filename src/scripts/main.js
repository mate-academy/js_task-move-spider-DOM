'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const shiftX = spider.offsetWidth / 2;
const shiftY = spider.offsetHeight / 2;

const wallStyles = getComputedStyle(wall);
const wallBorder = parseFloat(wallStyles.border);

const wallInfo = wall.getBoundingClientRect();
const maxPositionX = wallInfo.left + wall.offsetWidth - wallBorder - shiftX;
const maxPositionY = wallInfo.top + wall.offsetHeight - wallBorder - shiftY;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let positionX = e.clientX - wallInfo.left - wallBorder;

  if (e.clientX > maxPositionX) {
    positionX = maxPositionX - wallInfo.left - wallBorder;
  }

  spider.style.left = (positionX - shiftX) + 'px';

  if (positionX < shiftX) {
    spider.style.left = 0;
  }

  let positionY = e.clientY - wallInfo.top - wallBorder;

  if (e.clientY > maxPositionY) {
    positionY = maxPositionY - wallInfo.top - wallBorder;
  }

  spider.style.top = (positionY - shiftY) + 'px';

  if (positionY < shiftY) {
    spider.style.top = 0;
  }
});
