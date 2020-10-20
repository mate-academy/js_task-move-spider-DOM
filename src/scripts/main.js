'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  let spiderCoordsX = e.offsetX - spider.offsetWidth / 2 + 'px';
  let spiderCoordsY = e.offsetY - spider.offsetHeight / 2 + 'px';

  if (e.offsetX <= spider.offsetWidth / 2) {
    spiderCoordsX = '0';
  }

  if (e.offsetX >= wall.clientWidth - spider.offsetWidth / 2) {
    spiderCoordsX = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.offsetY <= spider.offsetHeight / 2) {
    spiderCoordsY = '0';
  }

  if (e.offsetY >= wall.clientHeight - spider.offsetHeight / 2) {
    spiderCoordsY = wall.clientHeight - spider.offsetHeight + 'px';
  }

  spider.style.left = spiderCoordsX;
  spider.style.top = spiderCoordsY;
});
