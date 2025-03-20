'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const maxHeight = wall.clientHeight - spider.clientHeight;
    const maxWidth = wall.clientWidth - spider.clientWidth;

    let width = e.clientX - wall.offsetLeft - spider.clientWidth / 2;
    let height = e.clientY - wall.offsetTop - spider.clientHeight / 2;

    if (width > maxWidth) {
      width = maxWidth;
    }

    if (width < 0) {
      width = 0;
    }

    if (height > maxHeight) {
      height = maxHeight;
    }

    if (height < 0) {
      height = 0;
    }

    spider.style.top = `${height}px`;
    spider.style.left = `${width}px`;
  }
});
