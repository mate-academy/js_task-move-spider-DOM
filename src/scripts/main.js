'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (e.offsetY > wall.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  if (e.offsetX > wall.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
