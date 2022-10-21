'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const spiderCenter = spider.width / 2;

  if (e.target !== wall) {
    return;
  }

  let coordSpiderX = e.offsetX - spiderCenter;
  let coordSpiderY = e.offsetY - spiderCenter;

  if (e.offsetX < spiderCenter) {
    coordSpiderX = 0;
  }

  if (e.offsetY < spiderCenter) {
    coordSpiderY = 0;
  }

  if (e.offsetX > wall.clientWidth - spiderCenter) {
    coordSpiderX = wall.clientWidth - spider.width;
  }

  if (e.offsetY > wall.clientHeight - spiderCenter) {
    coordSpiderY = wall.clientHeight - spider.width;
  }

  spider.style = `left: ${coordSpiderX}px ; top: ${coordSpiderY}px`;
});
