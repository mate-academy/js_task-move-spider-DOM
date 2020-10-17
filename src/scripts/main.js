'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const spiderTerritory = e.target.closest('.wall');

  if (!spiderTerritory) {
    return;
  }

  spider.style.left = e.offsetX - spider.offsetWidth / 2 + 'px';
  spider.style.top = e.offsetY - spider.offsetHeight / 2 + 'px';

  if (e.offsetX <= spider.offsetWidth / 2) {
    spider.style.left = '0';
  }

  if (e.offsetX >= wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.offsetY <= spider.offsetHeight / 2) {
    spider.style.top = '0';
  }

  if (e.offsetY >= wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }
});
