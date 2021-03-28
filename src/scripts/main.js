'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const field = wall.getBoundingClientRect();
  let positionTop = e.clientY - field.top
    - wall.clientTop - spider.clientHeight / 2;
  let positionLeft = e.clientX - field.left
    - wall.clientLeft - spider.clientWidth / 2;

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
