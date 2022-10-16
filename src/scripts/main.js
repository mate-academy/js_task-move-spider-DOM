'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  };

  const border = spider.clientWidth / 2;

  const maxX = wall.clientWidth - border;

  const maxY = wall.clientHeight - border;

  let moveX = e.offsetX;
  let moveY = e.offsetY;

  if (moveX < border) {
    moveX = border;
  }

  if (moveY < border) {
    moveY = border;
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
