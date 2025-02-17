'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  let positionTop =
    e.clientY - wall.clientTop - wall.offsetTop - spider.clientHeight / 2;
  let positionLeft =
    e.clientX - wall.clientLeft - wall.offsetLeft - spider.clientWidth / 2;

  positionTop = positionTop < 0 ? 0 : positionTop;
  positionLeft = positionLeft < 0 ? 0 : positionLeft;

  if (positionLeft + spider.clientWidth > wall.clientWidth) {
    positionLeft = wall.clientWidth - spider.clientWidth;
  }

  if (positionTop + spider.clientHeight > wall.clientHeight) {
    positionTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = positionTop + 'px';
  spider.style.left = positionLeft + 'px';
});
