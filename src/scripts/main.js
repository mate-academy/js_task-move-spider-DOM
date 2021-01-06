'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderW = spider.clientWidth;
const spiderH = spider.clientHeight;
const borderWidth = (wall.offsetWidth - wall.clientWidth) / 2;

wall.addEventListener('click', e => {
  const { layerX: posX, layerY: posY } = e;

  spider.style.left = calcCoords(posX, spiderW);
  spider.style.top = calcCoords(posY, spiderH);
});

function calcCoords(position, sizeOfSpider) {
  if (position - (sizeOfSpider / 2) - borderWidth < 0) {
    return 0;
  }

  if (position > wall.clientHeight - (sizeOfSpider / 2)) {
    return `${wall.clientHeight - sizeOfSpider}px`;
  }

  return `${position - (sizeOfSpider / 2) - borderWidth}px`;
}
