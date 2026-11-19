'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const spiderWidth = spider.clientWidth / 2;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  const halfWidth =
    e.clientX -
    wall.getBoundingClientRect().left -
    wall.clientLeft -
    spiderWidth;

  const halfHeight =
    e.clientY - wall.getBoundingClientRect().top - wall.clientTop - spiderWidth;

  spider.style.left = `${Math.min(Math.max(halfWidth, 0), maxLeft)}px`;
  spider.style.top = `${Math.min(Math.max(halfHeight, 0), maxTop)}px`;
});
