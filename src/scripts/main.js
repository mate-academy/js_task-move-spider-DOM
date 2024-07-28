'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const topPos = wall.offsetTop;
const leftPos = wall.offsetLeft;
const widthSpider = spider.offsetWidth / 2;
const heightSpider = spider.offsetHeight / 2;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const x = e.clientX - leftPos - heightSpider;
    const y = e.clientY - topPos - widthSpider;

    spider.style.cssText = `
    top: ${y}px;
    left: ${x}px;
    `;
  }
});
