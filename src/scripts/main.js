'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  if (!e.target.closest('.wall')) {
    return;
  }

  let coordsX = e.offsetX - spider.clientWidth / 2;
  let coordsY = e.offsetY - spider.clientHeight / 2;

  const wallWidth = parseFloat(wall.clientWidth) - spider.clientWidth;

  const wallHight = parseFloat(wall.clientHeight) - spider.clientHeight;

  if (coordsX < 1) {
    coordsX = 0;
  }

  if (coordsY < 1) {
    coordsY = 0;
  }

  if (coordsX > wallWidth) {
    coordsX = wallWidth;
  }

  if (coordsY > wallHight) {
    coordsY = wallHight;
  }

  spider.style.left = `${coordsX}px`;
  spider.style.top = `${coordsY}px`;
});
