'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  let clientX = e.offsetX - spider.clientWidth / 2;
  let clientY = e.offsetY - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;
  const minX = 0;
  const minY = 0;

  clientX = (clientX > maxX) ? maxX : (clientX < minX) ? minX : clientX;
  clientY = (clientY > maxY) ? maxY : (clientY < minY) ? minY : clientY;

  spider.style.left = `${clientX}px`;
  spider.style.top = `${clientY}px`;
});
