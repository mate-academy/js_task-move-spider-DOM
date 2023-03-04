'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderHalfWidth = spider.offsetWidth / 2;
const spiderHalfHeight = spider.offsetHeight / 2;
const maxWidth = wall.clientWidth - spider.offsetWidth;
const maxHeight = wall.clientHeight - spider.offsetHeight;
const wallCoords = wall.getBoundingClientRect();

document.addEventListener('click', e => {
  let x = e.clientX - wallCoords.left - wall.clientLeft - spiderHalfWidth;
  let y = e.clientY - wallCoords.top - wall.clientTop - spiderHalfHeight;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxWidth) {
    x = maxWidth;
  }

  if (y > maxHeight) {
    y = maxHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
