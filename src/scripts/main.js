'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const widthSpider = spider.clientWidth;
const heightSpider = spider.clientHeight;

wall.addEventListener('click', e => {
  // write code here
  const widthLimit = widthWall - widthSpider;
  const heigthLimit = heightWall - heightSpider;

  let x = e.offsetX - (widthSpider / 2);
  let y = e.offsetY - (heightSpider / 2);

  if (e.offsetX - spider.width < 0) {
    x = 0;
  } else if (x > widthLimit) {
    x = widthLimit;
  }

  if (e.offsetY - spider.width < 0) {
    y = 0;
  } else if (y > heigthLimit) {
    y = heigthLimit;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
