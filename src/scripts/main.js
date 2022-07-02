'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const widthShift = wall.clientWidth - spider.offsetWidth;
    const heightShift = wall.clientHeight - spider.offsetHeight;

    let height = e.offsetY - spider.offsetHeight / 2;
    let width = e.offsetX - spider.offsetWidth / 2;

    if (width < 0) {
      width = 0;
    }

    if (width > widthShift) {
      width = widthShift;
    }

    if (height < 0) {
      height = 0;
    }

    if (height > heightShift) {
      height = heightShift;
    }

    spider.style.top = `${height}px`;
    spider.style.left = `${width}px`;
  }
});
