'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const htmlHeight = document.documentElement.clientHeight;
const htmlWidth = document.documentElement.clientWidth;

document.addEventListener('click', (e) => {
  if (
    !(e.clientY < (htmlHeight - wall.clientHeight) / 2) &&
    e.clientY < (htmlHeight + wall.clientHeight) / 2 &&
    !(e.clientX < (htmlWidth - wall.clientWidth) / 2) &&
    e.clientX < (htmlWidth + wall.clientWidth) / 2
  ) {
    spider.style.top = `${e.clientY - (htmlHeight - wall.clientHeight) / 2 - spider.clientHeight / 2}px`;
    spider.style.left = `${e.clientX - (htmlWidth - wall.clientWidth) / 2 - spider.clientWidth / 2}px`;
  }
});
