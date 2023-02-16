'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  const totalLeft
    = e.clientX - wallCoords.left - wall.clientLeft - spider.clientHeight / 2;

  const totalTop
    = e.clientY - wallCoords.top - wall.clientTop - spider.clientWidth / 2;

  spider.style.left = totalLeft + 'px';
  spider.style.top = totalTop + 'px';

  if (totalLeft < 0) {
    spider.style.left = '0px';
  }

  if (totalTop < 0) {
    spider.style.top = '0px';
  }

  if (totalLeft + spider.clientWidth > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  if (totalTop + spider.clientWidth > wall.clientWidth) {
    spider.style.top = wall.clientWidth - spider.clientWidth + 'px';
  }
});
