'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const halfSpider = spider.width / 2;

  if (e.target !== wall) {
    return;
  }

  let coordCenterSpiderX = e.offsetX - halfSpider;
  let coordCenterSpiderY = e.offsetY - halfSpider;

  if (e.offsetX < halfSpider) {
    coordCenterSpiderX = 0;
  }

  if (e.offsetY < halfSpider) {
    coordCenterSpiderY = 0;
  }

  if (e.offsetX > wall.clientWidth - halfSpider) {
    coordCenterSpiderX = wall.clientWidth - spider.width;
  }

  if (e.offsetY > wall.clientHeight - halfSpider) {
    coordCenterSpiderY = wall.clientHeight - spider.width;
  }

  spider.style = `left: ${coordCenterSpiderX}px ; top: ${coordCenterSpiderY}px`;
});
