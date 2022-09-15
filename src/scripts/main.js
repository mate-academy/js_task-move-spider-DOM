'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let moveX = e.offsetX - spider.width / 2;
  let moveY = e.offsetY - spider.height / 2;

  if (moveX < 0) {
    moveX = 0;
  }

  if (moveY < 0) {
    moveY = 0;
  }

  spider.style.left = (moveX > maxX) ? `${maxX}px` : `${moveX}px`;
  spider.style.top = (moveY > maxY) ? `${maxY}px` : `${moveY}px`;
});
