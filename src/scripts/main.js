'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  // write code here
  const coordX = e.offsetX;
  const coordY = e.offsetY;
  let positionTop;
  let positionLeft;

  if (e.target === spider) {
    return;
  }

  if (coordX <= spider.clientWidth / 2) {
    positionLeft = 0;
  } else if (coordX >= wall.clientWidth - spider.clientWidth) {
    positionLeft = wall.clientWidth - spider.clientWidth + 'px';
  } else {
    positionLeft = coordX - (spider.clientWidth / 2) + 'px';
  }

  if (coordY <= spider.clientHeight / 2) {
    positionTop = 0;
  } else if (coordY >= wall.clientHeight - spider.clientHeight) {
    positionTop = wall.clientHeight - spider.clientHeight + 'px';
  } else {
    positionTop = coordY - (spider.clientHeight / 2) + 'px';
  }

  spider.style.top = positionTop;
  spider.style.left = positionLeft;
});
