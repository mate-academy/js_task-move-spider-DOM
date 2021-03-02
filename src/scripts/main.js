'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  // write code here
  e.preventDefault();

  const wallStartX = wall.getBoundingClientRect().left + wall.clientLeft;
  const wallStartY = wall.getBoundingClientRect().top + wall.clientTop;
  let moveX = e.clientX - wallStartX - spider.clientWidth / 2;
  let moveY = e.clientY - wallStartY - spider.clientHeight / 2;

  if (moveX < 0) {
    moveX = 0;
  } else {
    if (moveX + spider.clientWidth > wall.clientWidth) {
      moveX = wall.clientWidth - spider.clientWidth;
    }
  }

  if (moveY < 0) {
    moveY = 0;
  } else {
    if (moveY + spider.clientWidth > wall.clientHeight) {
      moveY = wall.clientHeight - spider.clientHeight;
    }
  }

  spider.style.left = `${moveX}px`;
  spider.style.top = `${moveY}px`;
});
