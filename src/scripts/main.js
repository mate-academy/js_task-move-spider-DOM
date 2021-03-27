'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallBorderLeft = wall.clientLeft;
const wallBorderTop = wall.clientTop;

wall.addEventListener('click', e => {
  let coordX = e.clientX - wall.getBoundingClientRect().x
    - wallBorderLeft - spiderWidth / 2;
  let coordY = e.clientY - wall.getBoundingClientRect().y
    - wallBorderTop - spiderHeight / 2;

  if (e.clientX < wall.getBoundingClientRect().x
    + wallBorderLeft + spiderWidth / 2) {
    coordX = 0;
  }

  if (e.clientY < wall.getBoundingClientRect().y
    + wallBorderTop + spiderWidth / 2) {
    coordY = 0;
  }

  if (e.clientX > wall.getBoundingClientRect().x + wallWidth
    - wallBorderLeft - spiderWidth / 2) {
    coordX = wallWidth - wallBorderLeft * 2 - spiderWidth;
  }

  if (e.clientY > wall.getBoundingClientRect().y + wallHeight
    - wallBorderTop - spiderHeight / 2) {
    coordY = wallHeight - wallBorderTop * 2 - spiderHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
