'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (event.target === spider) {
    return;
  }

  if (event.offsetX <= spider.clientWidth / 2) {
    spider.style.left = 0;
  } else if (event.offsetX >= wall.clientWidth - spider.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  } else {
    spider.style.left = event.offsetX - spider.clientWidth / 2 + 'px';
  }

  if (event.offsetY <= spider.clientHeight / 2) {
    spider.style.top = 0;
  } else if (event.offsetY >= wall.clientHeight - spider.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  } else {
    spider.style.top = event.offsetY - spider.clientHeight / 2 + 'px';
  }
});
