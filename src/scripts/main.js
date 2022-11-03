'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const coords = {
    top: e.clientY - wall.offsetTop - (spider.clientHeight / 2),
    left: e.clientX - wall.offsetLeft - (spider.clientWidth / 2),
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

  if (coords.left > (wall.clientWidth - spider.clientWidth)) {
    coords.left = wall.clientWidth - spider.clientWidth;
  }

  if (coords.top > (wall.clientHeight - spider.clientWidth)) {
    coords.top = wall.clientHeight - spider.clientWidth;
  }

  spider.style = `top: ${coords.top + 'px'}; left: ${coords.left + 'px'}`;
});
