'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  if (e.offsetX > wall.clientWidth - spider.clientWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  }

  if (e.offsetX < spider.clientWidth) {
    spider.style.left = 0;
  } else {
    spider.style.left = `${e.offsetX - (spider.clientWidth / 2)}px`;
  }

  if (e.offsetY > wall.clientHeight - spider.clientHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  }

  if (e.offsetY < spider.clientHeight) {
    spider.style.top = 0;
  } else {
    spider.style.top = `${e.offsetY - (spider.clientHeight / 2)}px`;
  }
});
