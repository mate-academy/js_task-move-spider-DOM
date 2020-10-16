'use strict';

const wall = document.querySelector('.wall');
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;
const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', e => {
  if (wall.contains(e.target)) {
    if (e.offsetY > (wallHeight - spiderHeight / 2)
      && e.offsetX > (wallWidth - spiderWidth / 2)) {
      spider.style.left = `${e.offsetX - spiderWidth}px`;
      spider.style.top = `${e.offsetY - spiderHeight}px`;
    }

    if (e.offsetY > (wallHeight - spiderHeight / 2)) {
      spider.style.left = `${e.offsetX - spiderWidth / 2}px`;
      spider.style.top = `${e.offsetY - spiderHeight}px`;
    }

    if (e.offsetX > (wallWidth - spiderWidth / 2)) {
      spider.style.left = `${e.offsetX - spiderWidth}px`;
      spider.style.top = `${e.offsetY - spiderHeight / 2}px`;
    } else {
      spider.style.left = `${e.offsetX - spiderWidth / 2}px`;
      spider.style.top = `${e.offsetY - spiderHeight / 2}px`;
    }
  }
});
