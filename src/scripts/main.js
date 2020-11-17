'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  if (e.target !== spider) {
    spider.style.top = e.offsetY - (spider.clientHeight / 2) + 'px';
    spider.style.left = e.offsetX - (spider.clientWidth / 2) + 'px';
  }
});
