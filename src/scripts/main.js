'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let heigth = e.offsetY - spider.offsetHeight / 2;
  let width = e.offsetX - spider.offsetWidth / 2;

  if (heigth < 0) {
    heigth = 0;
  }

  if (width < 0) {
    width = 0;
  }

  if (heigth + spider.clientHeight > wall.clientHeight) {
    heigth = wall.clientHeight - spider.clientHeight;
  }

  if (width + spider.clientWidth > wall.clientWidth) {
    width = wall.clientWidth - spider.clientWidth;
  }

  spider.style.left = width + 'px';
  spider.style.top = heigth + 'px';
});
