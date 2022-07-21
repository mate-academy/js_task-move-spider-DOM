'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  e.offsetX < spider.clientWidth / 2
    ? spider.style.left = 0 + 'px'
    : spider.style.left = e.offsetX - spider.clientWidth / 2 + 'px';

  if (e.offsetX > (wall.clientWidth - spider.clientWidth)) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  e.offsetY < spider.clientHeight / 2
    ? spider.style.top = 0 + 'px'
    : spider.style.top = e.offsetY - spider.clientWidth / 2 + 'px';

  if (e.offsetY > (wall.clientHeight - spider.clientHeight)) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }
});
