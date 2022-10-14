'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const halfOfSpider = spider.clientHeight / 2;

  if (e.target.contains(wall)) {
    spider.style.left = `${e.offsetX - halfOfSpider}px`;
    spider.style.top = `${e.offsetY - halfOfSpider}px`;

    if (e.offsetX < halfOfSpider) {
      spider.style.left = 0;
    }

    if (e.offsetX > wall.clientWidth - halfOfSpider) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    }

    if (e.offsetY < halfOfSpider) {
      spider.style.top = 0;
    }

    if (e.offsetY > wall.clientHeight - halfOfSpider) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    }
  }
});
