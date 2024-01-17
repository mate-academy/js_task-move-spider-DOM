'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const maxY = wall.clientWidth - spider.clientWidth;
  const maxX = wall.clientHeight - spider.clientHeight;
  const minX = 0;
  const minY = 0;

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  coordX = Math.max(minX, Math.min(coordX, maxX));
  coordY = Math.max(minY, Math.min(coordY, maxY));

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
