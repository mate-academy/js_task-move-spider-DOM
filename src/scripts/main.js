'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  let xCoords = e.clientX - wall.getBoundingClientRect().x
    - wall.clientLeft - spider.clientWidth / 2;

  let yCoords = e.clientY - wall.getBoundingClientRect().y
    - wall.clientTop - spider.clientHeight / 2;

  if (xCoords < 0) {
    xCoords = 0;
  }

  if (xCoords + spider.clientWidth > wall.clientWidth) {
    xCoords = wall.clientWidth - spider.clientWidth;
  }

  if (yCoords < 0) {
    yCoords = 0;
  }

  if (yCoords + spider.clientHeight > wall.clientHeight) {
    yCoords = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${xCoords}px`;
  spider.style.top = `${yCoords}px`;
});
