'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const border = parseFloat(styleWall.border);

const styleSpider = getComputedStyle(spider);
const widthSpider = parseFloat(styleSpider.width);
const heightSpider = parseFloat(styleSpider.height);

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const wallLeft = wall.getBoundingClientRect().left;
    const wallTop = wall.getBoundingClientRect().top;
    const wallRight = wall.getBoundingClientRect().right;
    const wallBottom = wall.getBoundingClientRect().bottom;

    const leftSp = e.clientX - wallLeft - widthSpider / 2 - border;
    const topSp = e.clientY - wallTop - heightSpider / 2 - border;

    if (topSp < 0) {
      spider.style.top = '0px';
    } else if (e.clientY + (widthSpider / 2 + border) > wallBottom) {
      spider.style.top = wallBottom - wallTop - widthSpider - border * 2 + 'px';
    } else {
      spider.style.top = topSp + 'px';
    }

    if (leftSp < 0) {
      spider.style.left = '0px';
    } else if (e.clientX + (heightSpider / 2 + border) > wallRight) {
      spider.style.left = wallRight
        - wallLeft - heightSpider - border * 2 + 'px';
    } else {
      spider.style.left = leftSp + 'px';
    }
  }
});
