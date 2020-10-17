'use strict';

const wall = document.querySelector('.wall');
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', e => {
  if (wall.contains(e.target)) {
    if (e.offsetX > (wallWidth - spiderWidth)) {
      spider.style.left = `${e.offsetX - spiderWidth}px`;
    } else if (e.offsetX < spiderWidth) {
      spider.style.left = `${e.offsetX / 2}px`;
    } else {
      spider.style.left = `${e.offsetX - spiderWidth / 2}px`;
    }

    if (e.offsetY > (wallHeight - spiderHeight)) {
      spider.style.top = `${e.offsetY - spiderHeight}px`;
    } else if (e.offsetY < spiderHeight) {
      spider.style.top = `${e.offsetY}px`;
    } else {
      spider.style.top = `${e.offsetY - spiderHeight / 2}px`;
    }
  }
});
