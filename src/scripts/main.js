'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');

  if (!item || !wall.contains(item)) {
    return;
  }

  spider.style.top = `${e.offsetY - spider.clientHeight / 2}px`;
  spider.style.left = `${e.offsetX - spider.clientWidth / 2}px`;

  if (e.offsetY - spider.clientHeight / 2 < 0) {
    spider.style.top = '0px';
  }

  if (e.offsetX - spider.clientWidth / 2 < 0) {
    spider.style.left = '0px';
  }

  if (e.offsetY + spider.clientHeight / 2 > wall.clientHeight) {
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
  }

  if (e.offsetX + spider.clientWidth / 2 > wall.clientWidth) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
  }
});
