'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const halfSpiderWidth = spider.clientWidth / 2;
  const halfSpiderHeight = spider.clientHeight / 2;

  let spiderCoordsX = e.offsetX - halfSpiderWidth;
  let spiderCoordsY = e.offsetY - halfSpiderHeight;

  if (e.offsetX < halfSpiderWidth) {
    spiderCoordsX = 0;
  }

  if (e.offsetY < halfSpiderHeight) {
    spiderCoordsY = 0;
  }

  if (e.offsetX > wall.clientWidth - halfSpiderWidth) {
    spiderCoordsX = wall.clientWidth - spider.clientWidth;
  }

  if (e.offsetY > wall.clientHeight - halfSpiderHeight) {
    spiderCoordsY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderCoordsX}px`;
  spider.style.top = `${spiderCoordsY}px`;
});
