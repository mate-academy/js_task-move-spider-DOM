'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  // write code here

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

  if (moveX > maxX) {
    spider.style.left = `${maxX}px`;
  } else {
    spider.style.left = `${moveX}px`;
  }

  if (moveY > maxY) {
    spider.style.top = `${maxY}px`;
  } else {
    spider.style.top = `${moveY}px`;
  }
});
