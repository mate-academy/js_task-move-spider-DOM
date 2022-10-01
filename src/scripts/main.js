'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const target = e.target;

  if (!target.classList.contains('wall')) {
    return;
  }

  spider.style.top = e.offsetY - (spider.clientHeight / 2) + 'px';
  spider.style.left = e.offsetX - (spider.clientWidth / 2) + 'px';

  if (e.offsetY < 0 + spider.clientHeight) {
    spider.style.top = 0;
  }

  if (e.offsetY > wall.clientHeight - spider.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }

  if (e.offsetX < 0 + spider.clientWidth) {
    spider.style.left = 0;
  }

  if (e.offsetX > wall.clientWidth - spider.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }
});
