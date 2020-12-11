'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderX = wall.clientHeight - spider.offsetHeight;
const spiderY = wall.clientWidth - spider.offsetWidth;

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  let pointX = event.offsetX - spider.offsetWidth / 2;
  let pointY = event.offsetY - spider.offsetHeight / 2;

  if (pointX < 0) {
    pointX = 0;
  }

  if (pointY < 0) {
    pointX = 0;
  }

  if (pointX > spiderX) {
    pointX = spiderX;
  }

  if (pointY > spiderY) {
    pointY = spiderY;
  }

  spider.style.left = `${pointX}px`;
  spider.style.top = `${pointY}px`;
});
