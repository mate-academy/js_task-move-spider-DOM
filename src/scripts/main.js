'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const maxPositionX = wall.clientWidth - spiderWidth;
const maxPositionY = wall.clientHeight - spiderHeight;

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  }

  const newPositionX = event.offsetX - spiderWidth / 2;
  const newPositionY = event.offsetY - spiderHeight / 2;

  spider.style.top = Math.max(0, Math.min(maxPositionY, newPositionY)) + 'px';
  spider.style.left = Math.max(0, Math.min(maxPositionX, newPositionX)) + 'px';
});
