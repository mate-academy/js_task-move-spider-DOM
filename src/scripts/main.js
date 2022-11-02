'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();

  const coords = {
    top: e.clientY - wallCoords.top - spider.clientHeight / 2,
    left: e.clientX - wallCoords.left - spider.clientWidth / 2,
  };

  if (e.target !== wall) {
    return;
  }

  if (coords.top < 0) {
    coords.top = 0;
  }

  if (coords.left < 0) {
    coords.left = 0;
  }

  if (coords.top > (wall.clientHeight - spider.clientHeight)) {
    coords.top = wall.clientHeight - spider.clientHeight;
  }

  if (coords.left > (wall.clientWidth - spider.clientWidth)) {
    coords.left = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = coords.top + `px`;
  spider.style.left = coords.left + `px`;
});
