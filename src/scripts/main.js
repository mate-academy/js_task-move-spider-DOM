'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const boundarX = wall.clientWidth - spider.offsetWidth;
const boundarY = wall.clientHeight - spider.offsetHeight;

const halfWidthOfSpider = spider.offsetWidth / 2;
const halfHeightOfSpider = spider.offsetHeight / 2;

document.addEventListener('click', (e) => {
  let x = e.clientX - wall.offsetLeft - wall.clientLeft - halfWidthOfSpider;
  let y = e.clientY - wall.offsetTop - wall.clientTop - halfHeightOfSpider;

  x = x < 0 ? 0 : x;
  y = y < 0 ? 0 : y;

  x = x > boundarX ? boundarX : x;
  y = y > boundarY ? boundarY : y;

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
