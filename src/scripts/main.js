'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    return;
  }

  const point = {
    x: event.offsetX - (spider.width / 2),
    y: event.offsetY - (spider.width / 2),
  };

  if (wall.clientWidth - event.offsetX < spider.width) {
    point.x = wall.clientWidth - spider.width;
  }

  if (spider.width > event.offsetX) {
    point.x = 0;
  }

  if (wall.clientHeight - event.offsetY < spider.height) {
    point.y = wall.clientHeight - spider.height;
  }

  if (spider.height > event.offsetY) {
    point.y = 0;
  }

  spider.style.left = `${point.x}px`;
  spider.style.top = `${point.y}px`;
});
