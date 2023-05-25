'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  if (!wall.contains(e.target)) {
    return;
  }

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  coordX = coordX > maxWidth ? maxWidth : coordX;
  coordY = coordY > maxHeight ? maxHeight : coordY;

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
