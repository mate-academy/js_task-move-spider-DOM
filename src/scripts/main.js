'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');

wall.addEventListener('click', e => {
  // write code here
  let coordsX = e.offsetX - spider.clientWidth / 2;
  let coordsY = e.offsetY - spider.clientHeight / 2;

  if (e.target !== wall) {
    return;
  }

  if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsY < 0) {
    coordsY = 0;
  }

  if (coordsX > wall.clientWidth - spider.clientWidth) {
    coordsX = wall.clientWidth - spider.clientWidth;
  }

  if (coordsY > wall.clientHeight - spider.clientHeight) {
    coordsY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = coordsX + 'px';
  spider.style.top = coordsY + 'px';
});
