'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallBorderWidth = (wall.offsetWidth - wall.clientWidth) / 2;

document.addEventListener('click', e => {
  const startPoint = wall.getBoundingClientRect();

  if (e.target !== wall) {
    return;
  }

  let newX = e.clientX - spider.width / 2
    - startPoint.left - wallBorderWidth;
  let newY = e.clientY - spider.height / 2
    - startPoint.top - wallBorderWidth;

  if (newX < 0) {
    newX = 0;
  }

  if (newY < 0) {
    newY = 0;
  }

  if (newX > wall.clientWidth - spider.width) {
    newX = wall.clientWidth - spider.width;
  }

  if (newY > wall.clientHeight - spider.height) {
    newY = wall.clientHeight - spider.height;
  }

  spider.style.top = newY + 'px';
  spider.style.left = newX + 'px';
});
