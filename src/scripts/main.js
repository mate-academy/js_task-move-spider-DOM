'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  let coordX = e.offsetX - spider.clientHeight / 2;
  let coordY = e.offsetY - spider.clientWidth / 2;
  const coordMax = wall.clientWidth - spider.clientWidth;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > coordMax) {
    coordX = coordMax;
  }

  if (coordY > coordMax) {
    coordY = coordMax;
  }

  spider.style.top = coordY + 'px';
  spider.style.left = coordX + 'px';
});
