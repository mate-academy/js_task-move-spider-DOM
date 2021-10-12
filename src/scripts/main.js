'use strict';
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    let spiderTopValue;
    let spiderLeftValue;
    const availableWidth = wall.clientWidth - spider.width;
    const availableHeight = wall.clientHeight - spider.height;

    if (e.offsetX - spider.width < 0) {
      spiderLeftValue = 0;
    } else if (availableWidth < e.offsetX) {
      spiderLeftValue = availableWidth;
    } else {
      spiderLeftValue = e.offsetX - spider.width / 2;
    }

    if (e.offsetY - spider.height < 0) {
      spiderTopValue = 0;
    } else if (availableHeight < e.offsetY) {
      spiderTopValue = availableHeight;
    } else {
      spiderTopValue = e.offsetY - spider.height / 2;
    }

    spider.style.top = `${spiderTopValue}px`;
    spider.style.left = `${spiderLeftValue}px`;
  }
});
