'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  if (wall !== e.target) {
    return;
  }

  let coordX = e.offsetX - spider.clientHeight / 2;
  let coordY = e.offsetY - spider.clientWidth / 2;
  const width = wall.clientWidth - spider.clientWidth;
  const height = wall.clientHeight - spider.clientHeight;

  coordX = coordX < 0 ? 0 : coordX;
  coordX = coordX > width ? width : coordX;

  coordY = coordY < 0 ? 0 : coordY;
  coordY = coordY > height ? height : coordY;

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
