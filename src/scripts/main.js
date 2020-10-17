'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const emptySpaceX = (document.body.clientWidth - wall.clientWidth) / 2;
const emptySpaceY = (document.body.clientHeight - wall.clientHeight) / 2;

document.addEventListener('click', e => {
  e.preventDefault();

  const spiderTerritory = e.target.closest('.wall');

  if (!spiderTerritory) {
    return;
  }

  spider.style.left = e.clientX - emptySpaceX - spider.offsetWidth / 2 + 'px';
  spider.style.top = e.clientY - emptySpaceY - spider.offsetHeight / 2 + 'px';

  if (e.clientX <= emptySpaceX + spider.offsetWidth / 2) {
    spider.style.left = '0';
  }

  if (e.clientX >= emptySpaceX + wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.clientY <= emptySpaceY + spider.offsetHeight / 2) {
    spider.style.top = '0';
  }

  if (e.clientY >= emptySpaceY + wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }
});
