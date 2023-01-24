'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let positionTop = e.offsetY;
  let positionLeft = e.offsetX;
  const halfSpiderWidth = spider.clientWidth / 2;
  const halfSpiderHeight = spider.clientHeight / 2;

  if (positionTop + spider.clientHeight > wall.clientHeight) {
    positionTop = wall.clientHeight - halfSpiderHeight;
  }

  if (positionLeft + spider.clientWidth > wall.clientWidth) {
    positionLeft = wall.clientWidth - halfSpiderWidth;
  }

  if (positionLeft - halfSpiderWidth < 0) {
    positionLeft = halfSpiderWidth;
  }

  if (positionTop - halfSpiderHeight < 0) {
    positionTop = halfSpiderHeight;
  }

  spider.style.top = `${positionTop - halfSpiderHeight}px`;
  spider.style.left = `${positionLeft - halfSpiderWidth}px`;
});
