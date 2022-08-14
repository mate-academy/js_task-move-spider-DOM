'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const halfofSpider = spider.clientWidth / 2;
  const wallWidth = wall.clientWidth;
  const wallHight = wall.clientHeight;

  if (e.target === wall) {
    spider.style.top = `${e.offsetY}px`;
    spider.style.left = `${e.offsetX}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }

  if (e.offsetX < halfofSpider) {
    spider.style.left = `${halfofSpider}px`;
  }

  if (e.offsetX > (wallWidth - halfofSpider)) {
    spider.style.left = `${wallWidth - halfofSpider}px`;
  }

  if (e.offsetY < halfofSpider) {
    spider.style.top = `${halfofSpider}px`;
  }

  if (e.offsetY > (wallHight - halfofSpider)) {
    spider.style.top = `${wallHight - halfofSpider}px`;
  }
});
