'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();

  let positionX = e.offsetX - spiderRect.width / 2;
  let positionY = e.offsetY - spiderRect.height / 2;

  const minX = 0;
  const minY = 0;
  const maxX = wall.clientWidth - spiderRect.width;
  const maxY = wall.clientHeight - spiderRect.height;

  if (positionX < minX) {
    positionX = minX;
  }

  if (positionX > maxX) {
    positionX = maxX;
  }

  if (positionY < minY) {
    positionY = minY;
  }

  if (positionY > maxY) {
    positionY = maxY;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
