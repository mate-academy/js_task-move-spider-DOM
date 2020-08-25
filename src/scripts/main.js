'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const spiderDimensions = spider.getBoundingClientRect();

  if (event.target !== wall) {
    return;
  }

  let coordX = event.offsetX - spiderDimensions.width / 2;
  let coordY = event.offsetY - spiderDimensions.height / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > wall.clientWidth - spiderDimensions.width) {
    coordX = wall.clientWidth - spiderDimensions.width;
  }

  if (coordY > wall.clientHeight - spiderDimensions.height) {
    coordY = wall.clientHeight - spiderDimensions.height;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
