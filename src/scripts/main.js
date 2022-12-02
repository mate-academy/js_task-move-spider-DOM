'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let spiderCoordsX = e.clientX - wall.offsetLeft
    - wall.clientLeft - spider.clientWidth / 2;

  let spiderCoordsY = e.clientY - wall.offsetTop
    - wall.clientTop - spider.clientHeight / 2;

  if (spiderCoordsX < 0) {
    spiderCoordsX = 0;
  }

  if (spiderCoordsY < 0) {
    spiderCoordsY = 0;
  };

  if (spiderCoordsX + spider.clientWidth > wall.clientWidth) {
    spiderCoordsX = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoordsY + spider.clientHeight > wall.clientHeight) {
    spiderCoordsY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoordsX + 'px';
  spider.style.top = spiderCoordsY + 'px';
});
