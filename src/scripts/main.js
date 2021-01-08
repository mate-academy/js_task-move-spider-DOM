'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const halfSpiderWidth = spiderWidth / 2;
const halfSpiderHeight = spiderHeight / 2;

const maxHeight = wall.clientHeight - halfSpiderHeight;
const maxWidth = wall.clientWidth - halfSpiderWidth;

const moveSpider = function(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  if (x < halfSpiderWidth) {
    x = 25;
  }

  if (y < halfSpiderHeight) {
    y = 25;
  }

  if (y > maxHeight) {
    y = maxHeight;
  }

  if (x > maxWidth) {
    x = maxWidth;
  }

  spider.style.left = `${x - halfSpiderHeight}px`;
  spider.style.top = `${y - halfSpiderWidth}px`;
};

wall.addEventListener('click', moveSpider);
