'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const halfOfSpider = spider.clientWidth / 2;
  const wallWidth = wall.clientWidth;
  const wallHeigth = wall.clientHeight;

  if (e.target === wall) {
    spider.style.top = `${e.offsetY}px`;
    spider.style.left = `${e.offsetX}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }

  if (e.offsetX < halfOfSpider) {
    spider.style.left = `${halfOfSpider}px`;
  }

  if (e.offsetX > (wallWidth - halfOfSpider)) {
    spider.style.left = `${wallWidth - halfOfSpider}px`;
  }

  if (e.offsetY < halfOfSpider) {
    spider.style.top = `${halfOfSpider}px`;
  }

  if (e.offsetY > (wallHeigth - halfOfSpider)) {
    spider.style.top = `${wallHeigth - halfOfSpider}px`;
  }
});
