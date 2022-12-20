'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoordinats = wall.getBoundingClientRect();
  let positionTop = e.clientY - wallCoordinats.top - spider.clientHeight / 2;
  let positionLeft = e.clientX - wallCoordinats.left - spider.clientWidth / 2;

  if (positionTop < 0) {
    positionTop = 0;
  }

  if (positionLeft < 0) {
    positionLeft = 0;
  }

  if (positionLeft + spider.clientWidth > wall.clientWidth) {
    positionLeft = wall.clientWidth - spider.clientWidth;
  }

  if (positionTop + spider.clientHeight > wall.clientHeight) {
    positionTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = `${positionTop}px`;
  spider.style.left = `${positionLeft}px`;
});
