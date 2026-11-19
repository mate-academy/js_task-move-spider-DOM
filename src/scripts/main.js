'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const halfWidth = spider.clientWidth / 2;
  const halfHeight = spider.clientHeight / 2;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  const spiderLeft =
    e.clientX - wall.getBoundingClientRect().left - wall.clientLeft - halfWidth;
  const spiderTop =
    e.clientY - wall.getBoundingClientRect().top - wall.clientTop - halfHeight;

  spider.style.left = `${Math.min(Math.max(spiderLeft, 0), maxLeft)}px`;
  spider.style.top = `${Math.min(Math.max(spiderTop, 0), maxTop)}px`;
});
