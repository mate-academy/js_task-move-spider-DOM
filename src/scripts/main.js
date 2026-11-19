'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const spiderWidth = spider.clientWidth / 2;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  const leftSpider =
    e.clientX -
    wall.getBoundingClientRect().left -
    wall.clientLeft -
    spiderWidth;
  const topSpider =
    e.clientY - wall.getBoundingClientRect().top - wall.clientTop - spiderWidth;

  spider.style.left = `${Math.min(Math.max(leftSpider, 0), maxLeft)}px`;
  spider.style.top = `${Math.min(Math.max(topSpider, 0), maxTop)}px`;
});
