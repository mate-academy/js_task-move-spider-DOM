'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spiderCoordsX = e.offsetX - spider.offsetWidth / 2 + 'px';
  const spiderCoordsY = e.offsetY - spider.offsetHeight / 2 + 'px';

  spider.style.left = spiderCoordsX;
  spider.style.top = spiderCoordsY;

  if (e.offsetX <= spider.offsetWidth / 2) {
    spider.style.left = '0';
  }

  if (e.offsetX >= wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.offsetY <= spider.offsetHeight / 2) {
    spider.style.top = '0';
  }

  if (e.offsetY >= wall.clientHeight - spider.offsetHeight / 2) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }
});
