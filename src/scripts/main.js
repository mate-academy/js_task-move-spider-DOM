'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSizes = spider.getBoundingClientRect();

wall.addEventListener('click', event => {
  let positionX = event.offsetX - (spiderSizes.width / 2);
  let positionY = event.offsetY - (spiderSizes.height / 2);

  if (event.target !== wall) {
    return;
  }

  positionX = putCoords(positionX, wall.clientWidth, spiderSizes.width);
  positionY = putCoords(positionY, wall.clientHeight, spiderSizes.height);

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;

  function putCoords(position, wallSize, spiderSize) {
    if (position > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else if (position < 0) {
      return 0;
    }

    return position;
  }
});
