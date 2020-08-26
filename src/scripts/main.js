'use strict';

const spider = document.querySelector('.spider');

const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  if (e.offsetX > wall.clientWidth - spider.clientWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  } else if (e.offsetX < spider.clientWidth) {
    spider.style.left = 0;
  } else {
    spider.style.left = `${e.offsetX - (spider.clientWidth / 2)}px`;
  }

  if (e.offsetY > wall.clientHeight - spider.clientHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  } else if (e.offsetY < spider.clientHeight) {
    spider.style.top = 0;
  } else {
    spider.style.top = `${e.offsetY - (spider.clientHeight / 2)}px`;
  }
});
