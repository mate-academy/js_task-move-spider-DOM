'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const positionY = e.clientY - wall.offsetTop
  - wall.clientTop - spider.clientHeight / 2;
  const positionX = e.clientX - wall.offsetLeft
  - wall.clientLeft - spider.clientWidth / 2;
  
  const maxy = wall.clientHeight - spider.offsetHeight;
  const maxh = wall.clientWidth - spider.offsetWidth;

  spider.style.top = `${Math.min(maxy, Math.max(positionY, 0))}px`;
  spider.style.left = `${Math.min(maxh, Math.max(positionX, 0))}px`;
});
