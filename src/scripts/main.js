'use strict';

document.addEventListener('click', events => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (events.target !== wall) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let moveH = events.offsetX - spider.width / 2;
  let moveY = events.offsetY - spider.height / 2;

  if (moveH > maxX) {
    moveH = maxX;
  }

  if (moveY > maxY) {
    moveY = maxY;
  }

  if (moveH < 0) {
    moveH = 0;
  }

  if (moveY < 0) {
    moveY = 0;
  }

  spider.style.left = `${moveH}px`;
  spider.style.top = `${moveY}px`;
});
