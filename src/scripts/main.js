'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.target !== spider) {
    const widthSpider = spider.clientWidth / 2;
    const heightSpider = spider.clientHeight / 2;
    const xMax = wall.clientWidth - spider.clientWidth;
    const yMax = wall.clientHeight - spider.clientHeight;
    const min = 0;

    let x = e.offsetX - widthSpider;
    let y = e.offsetY - heightSpider;

    x = x < min ? 0 : x;
    y = y < min ? 0 : y;
    x = x > xMax ? xMax : x;
    y = y > yMax ? yMax : y;

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
