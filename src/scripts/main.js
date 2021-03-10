'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const clientWidth = wall.clientWidth - spider.clientWidth;
const clientHeight = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  // write code here
  if (e.target !== wall) {
    return;
  };

  let positionLeft = e.offsetX - (spider.clientWidth / 2);
  let positionTop = e.offsetY - (spider.clientHeight / 2);

  if (positionLeft < 0) {
    positionLeft = 0;
  }

  if (positionLeft > clientWidth) {
    positionLeft = clientWidth;
  }

  if (positionTop < 0) {
    positionTop = 0;
  }

  if (positionTop > clientHeight) {
    positionTop = clientHeight;
  }

  spider.style.top = positionTop + 'px';
  spider.style.left = positionLeft + 'px';
});
