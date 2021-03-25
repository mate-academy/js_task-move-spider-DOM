'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  // write code here
  let coordX = e.clientX - wall.getBoundingClientRect().x
    - wall.clientLeft - spider.clientWidth / 2;

  let coordY = e.clientY - wall.getBoundingClientRect().y
    - wall.clientTop - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX + spider.clientWidth > wall.clientWidth) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY + spider.clientHeight > wall.clientHeight) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
