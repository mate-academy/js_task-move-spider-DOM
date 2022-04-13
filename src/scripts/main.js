'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    let spiderTopValue;
    let spiderLeftValue;
    const maxWidth = wall.clientWidth - spider.width;
    const maxHeight = wall.clientHeight - spider.height;

    if (e.offsetX - spider.width < 0) {
      spiderLeftValue = 0;
    } else if (maxWidth < e.offsetX) {
      spiderLeftValue = maxWidth;
    } else {
      spiderLeftValue = e.offsetX - spider.width / 2;
    }

    if (e.offsetY - spider.height < 0) {
      spiderTopValue = 0;
    } else if (maxHeight < e.offsetY) {
      spiderTopValue = maxHeight;
    } else {
      spiderTopValue = e.offsetY - spider.height / 2;
    }

    spider.style.top = `${spiderTopValue}px`;
    spider.style.left = `${spiderLeftValue}px`;
  }
});
