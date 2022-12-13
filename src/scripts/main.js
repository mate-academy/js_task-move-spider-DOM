'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const halfSpiderW = spider.clientWidth / 2;
  const halfSpiderH = spider.clientHeight / 2;

  let coordsSpiderX = e.offsetX - halfSpiderW;
  let coordsSpiderY = e.offsetY - halfSpiderH;

  if (e.offsetX < halfSpiderW) {
    coordsSpiderX = 0;
  }

  if (e.offsetY < halfSpiderH) {
    coordsSpiderY = 0;
  }

  if (e.offsetX > wall.clientWidth - halfSpiderW) {
    coordsSpiderX = wall.clientWidth - spider.clientWidth;
  }

  if (e.offsetY > wall.clientHeight - halfSpiderH) {
    coordsSpiderY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.cssText = `
    top: ${coordsSpiderY}px;
    left: ${coordsSpiderX}px;
  `;
});
