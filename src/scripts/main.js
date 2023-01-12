'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeightLimit = wall.clientHeight - spider.offsetHeight;
const wallWidthLimit = wall.clientWidth - spider.offsetWidth;

wall.addEventListener('click', e => {
  let positionTop = e.offsetY - (spider.offsetHeight / 2);
  let positionLeft = e.offsetX - (spider.offsetWidth / 2);

  if (positionTop < 0) {
    positionTop = 0;
  }

  if (positionTop > wallHeightLimit) {
    positionTop = wallHeightLimit;
  }

  if (positionLeft < 0) {
    positionLeft = 0;
  }

  if (positionLeft > wallWidthLimit) {
    positionLeft = wallWidthLimit;
  }

  spider.style.top = `${positionTop}px`;
  spider.style.left = `${positionLeft}px`;
});
