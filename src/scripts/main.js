'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const x = e.clientX - wallRect.left - spiderWidth / 2;
  const y = e.clientY - wallRect.top - spiderHeight / 2;

  if (x >= 0 && x <= wallWidth - spiderWidth) {
    spider.style.left = x + 'px';
  }

  if (y >= 0 && y <= wallHeight - spiderHeight) {
    spider.style.top = y + 'px';
  }
});
