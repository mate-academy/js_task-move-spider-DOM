'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  let coordsX = e.offsetX - spider.clientWidth / 2;
  let coordsY = e.offsetY - spider.clientHeight / 2;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (coordsX > maxX) {
    coordsX = maxX;
  }

  if (coordsY > maxY) {
    coordsY = maxY;
  }

  if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsY < 0) {
    coordsY = 0;
  }

  spider.style.left = coordsX + 'px';
  spider.style.top = coordsY + 'px';
});
