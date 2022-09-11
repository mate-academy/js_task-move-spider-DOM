'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const maxWidth = wall.clientWidth - spider.clientWidth;
    const maxHeight = wall.clientWidth - spider.clientHeight;

    let width = e.offsetX - spider.offsetWidth / 2;
    let height = e.offsetY - spider.offsetWidth / 2;

    if (width < 0) {
      width = 0;
    }

    if (width > maxWidth) {
      width = maxWidth;
    }

    if (height < 0) {
      height = 0;
    }

    if (height > maxHeight) {
      height = maxHeight;
    }

    spider.style.top = `${height}px`;
    spider.style.left = `${width}px`;
  }
});
