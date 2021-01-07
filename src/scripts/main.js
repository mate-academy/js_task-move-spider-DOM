'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  const spider = document.querySelector('.spider');

  const borderX = wall.clientLeft;

  const borderY = wall.clientTop;

  const X = e.clientX - borderX - wall.offsetLeft;

  const Y = e.clientY - borderY - wall.offsetTop;

  if (X >= -borderX && X <= wall.clientWidth + borderX
    && Y >= -borderY && Y <= wall.clientHeight + borderY) {
    if (X < spider.clientWidth / 2) {
      spider.style.left = '0px';
    } else if (X > wall.clientWidth - spider.clientWidth / 2) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    } else {
      spider.style.left = `${X - spider.clientWidth / 2}px`;
    }

    if (Y < spider.clientHeight / 2) {
      spider.style.top = '0px';
    } else if (Y > wall.clientHeight - spider.clientHeight / 2) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    } else {
      spider.style.top = `${Y - spider.clientHeight / 2}px`;
    }
  }
});
