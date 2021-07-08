'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.offsetY - spider.height < 0) {
    spider.style.top = 0;
  } else if (wall.clientHeight - spider.height < e.offsetY) {
    spider.style.top = `${wall.clientHeight - spider.height}px`;
  } else {
    spider.style.top = `${e.offsetY - spider.height / 2}px`;
  }

  if (e.offsetX - spider.width < 0) {
    spider.style.left = 0;
  } else if (wall.clientWidth - spider.width < e.offsetX) {
    spider.style.left = `${wall.clientWidth - spider.width}px`;
  } else {
    spider.style.left = `${e.offsetX - spider.width / 2}px`;
  }
});
