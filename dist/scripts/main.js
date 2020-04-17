'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', function(e) {
  const wallCoords = this.getBoundingClientRect();

  const wallInnerCoords = {
    top: wallCoords.top + wall.clientTop,
    left: wallCoords.left + wall.clientLeft,
  };

  const spiderCoords = {
    top: e.clientY - wallInnerCoords.top - spider.clientHeight / 2,
    left: e.clientX - wallInnerCoords.left - spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
    spiderCoords.left = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
    spiderCoords.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
