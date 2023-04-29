'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderHeight = parseFloat(getComputedStyle(spider).height) / 2;
const spiderWidth = parseFloat(getComputedStyle(spider).width) / 2;
const wallHeight = parseFloat(getComputedStyle(wall).height);
const wallWidth = parseFloat(getComputedStyle(wall).width);
const border = wall.clientTop;
const scrlY = window.pageYOffset;
const scrlX = window.pageXOffset;

document.addEventListener('click', e => {
  if (e.clientY > wall.offsetTop + spiderHeight + border
    && e.clientY < wall.offsetTop + wallHeight - spiderHeight + border
    && e.clientX > wall.offsetLeft + spiderWidth + border
    && e.clientX < wall.offsetLeft + wallWidth - spiderWidth + border) {
    spider.style.top = `${e.clientY - wall.offsetTop
    - border - spiderHeight + scrlY}px`;

    spider.style.left = `${e.clientX - wall.offsetLeft
    - border - spiderWidth + scrlX}px`;
  }
});
