'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallLeftBorder = parseInt(getComputedStyle(wall).borderLeftWidth);
  const wallTopBorder = parseInt(getComputedStyle(wall).borderTopWidth);

  let xCoordinate = e.clientX - wall.getBoundingClientRect().x
    - wallTopBorder - spider.clientWidth / 2;
  let yCoordinate = e.clientY - wall.getBoundingClientRect().y
    - wallLeftBorder - spider.clientHeight / 2;

  if (yCoordinate < spider.clientHeight / 2) {
    yCoordinate = 0;
  }

  if (yCoordinate + spider.clientHeight > wall.clientHeight) {
    yCoordinate = wall.clientHeight - spider.clientHeight;
  }

  if (xCoordinate < spider.clientWidth / 2) {
    xCoordinate = 0;
  }

  if (xCoordinate + spider.clientWidth > wall.clientWidth) {
    xCoordinate = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${yCoordinate}px`;
  spider.style.left = `${xCoordinate}px`;
});
