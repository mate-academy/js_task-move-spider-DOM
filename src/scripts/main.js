'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  };

  const maxX = wall.clientWidth - spider.clientWidth / 2;

  const maxY = wall.clientHeight - spider.clientHeight / 2;

  let moveX = e.offsetX;
  let moveY = e.offsetY;

  if (moveX < spider.clientHeight / 2) {
    moveX = spider.clientHeight / 2;
  }

  if (moveY < spider.clientHeight / 2) {
    moveY = spider.clientHeight / 2;
  }

  if (moveX > maxX) {
    moveX = maxX;
  }

  if (moveY > maxY) {
    moveY = maxY;
  }

  spider.style.top = `${moveY}px`;
  spider.style.left = `${moveX}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
