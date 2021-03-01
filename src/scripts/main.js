'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.target === spider) {
    return;
  }

  if (e.offsetX <= spider.clientWidth / 2) {
    spider.style.left = 0;
  } else if (e.offsetX >= wall.clientWidth - spider.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  } else {
    spider.style.left = e.offsetX - spider.clientWidth / 2 + 'px';
  }

  if (e.offsetY <= spider.clientHeight / 2) {
    spider.style.top = 0;
  } else if (e.offsetY >= wall.clientHeight - spider.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  } else {
    spider.style.top = e.offsetY - spider.clientHeight / 2 + 'px';
  }
});
