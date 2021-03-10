'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const accessibleWidth = wall.clientWidth - spiderWidth;
const accessibleHeight = wall.clientHeight - spiderHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let positionX = e.offsetX - (spiderWidth / 2);
  let positionY = e.offsetY - (spiderHeight / 2);

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionY < 0) {
    positionY = 0;
  }

  if (positionX > accessibleWidth) {
    positionX = accessibleWidth;
  }

  if (positionY > accessibleHeight) {
    positionY = accessibleHeight;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
