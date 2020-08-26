'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  // write code here
  const wallCoords = wall.getBoundingClientRect();

  spider.left = event.clientX - wallCoords.left
    - wall.clientLeft - spider.clientWidth / 2;

  spider.top = event.clientY - wallCoords.top
    - wall.clientTop - spider.clientHeight / 2;

  spider.style.left = spider.left + 'px';
  spider.style.top = spider.top + 'px';

  if (spider.top < 0) {
    spider.style.top = 0 + 'px';
  }

  if (spider.left < 0) {
    spider.style.left = 0 + 'px';
  }

  if (spider.left > wall.clientWidth - wall.clientLeft - spider.offsetWidth) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (spider.top > wall.clientHeight - wall.clientLeft - spider.offsetHeight) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }
});
