'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const coordX = e.clientX - wall.offsetLeft - wall.clientLeft;
  const coordY = e.clientY - wall.offsetTop - wall.clientTop;

  let xPos = coordX - spider.offsetWidth / 2;
  let yPos = coordY - spider.offsetHeight / 2;

  if (coordY < spider.offsetHeight / 2) {
    yPos = 0;
  }

  if (coordX < spider.offsetWidth / 2) {
    xPos = 0;
  }

  if (coordX > wall.clientWidth - spider.offsetWidth / 2) {
    xPos = wall.clientWidth - spider.offsetWidth;
  }

  if (coordY > wall.clientHeight - spider.offsetHeight / 2) {
    yPos = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${xPos}px`;
  spider.style.top = `${yPos}px`;
});
