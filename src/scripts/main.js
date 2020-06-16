/* eslint-disable no-console */
'use strict';

document.addEventListener('click', e => {
  if (e.target.closest('.wall') === null) {
    return;
  }

  const wall = document.querySelector('.wall');
  const border = parseInt(window.getComputedStyle(wall, null).borderWidth) * 2;
  const spider = document.querySelector('.spider');
  const position = wall.getBoundingClientRect();
  let x = e.clientX - position.x - e.target.clientLeft - spider.offsetWidth / 2;
  let y = e.clientY - position.y - e.target.clientTop - spider.offsetHeight / 2;
  const maxX = wall.offsetWidth - spider.offsetWidth - border;
  const maxY = wall.offsetHeight - spider.offsetHeight - border;

  if (x > maxX) {
    x = maxX;
  } else if (x < 0) {
    x = 0;
  }

  if (y > maxY) {
    y = maxY;
  } else if (y < 0) {
    y = 0;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
