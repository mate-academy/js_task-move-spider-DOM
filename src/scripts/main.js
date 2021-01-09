'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

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

  if (parseFloat(spider.style.top) > wallRect.height
  - spiderRect.height - wall.clientTop * 2) {
    spider.style.top = `${wallRect.height - spiderRect.height
      - wall.clientTop * 2}px`;
  }

  if (parseFloat(spider.style.left) > wallRect.width - spiderRect.width
  - wall.clientLeft * 2) {
    spider.style.left = `${wallRect.width - spiderRect.width
      - wall.clientLeft * 2}px`;
  }
});
