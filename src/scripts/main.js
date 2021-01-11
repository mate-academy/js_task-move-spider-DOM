'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const spider = document.querySelector('.spider');
const spiderRect = spider.getBoundingClientRect();

const maxTop = wallRect.height - spiderRect.height
  - wall.clientTop * 2;

const maxLeft = wallRect.width - spiderRect.width
- wall.clientLeft * 2;

function getCoords(e) {
  spider.style.top = `${e.clientY - (spider.clientHeight / 2)
    - wallRect.top - wall.clientTop}px`;

  spider.style.left = `${e.clientX - (spider.clientWidth / 2)
    - wallRect.left - wall.clientLeft}px`;

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = 0;
  }

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = 0;
  }

  if (parseFloat(spider.style.top) > maxTop) {
    spider.style.top = `${maxTop}px`;
  }

  if (parseFloat(spider.style.left) > maxLeft) {
    spider.style.left = `${maxLeft}px`;
  }
};

wall.addEventListener('click', getCoords);
