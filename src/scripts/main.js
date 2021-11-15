'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('div.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  const spider = document.querySelector('img.spider');
  const brd = 10;
  const difX = brd + spider.clientWidth / 2;
  const difY = brd + spider.clientHeight / 2;
  const minX = 0;
  const maxX = minX + wall.clientWidth - spider.clientWidth;
  const minY = 0;
  const maxY = minY + wall.clientHeight - spider.clientHeight;
  const coordX = e.clientX + window.pageXOffset - wall.offsetLeft - difX;
  const coordY = e.clientY + window.pageYOffset - wall.offsetTop - difY;

  spider.style.top = Math.min(Math.max(coordY, minY), maxY) + 'px';
  spider.style.left = Math.min(Math.max(coordX, minX), maxX) + 'px';
});
