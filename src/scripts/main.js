'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

spider.addEventListener('click', ev => {});

wall.addEventListener('click', ev => {
  const offsetY = (ev.target === spider)
    ? spider.offsetTop + ev.offsetY
    : ev.offsetY;

  const offsetX = (ev.target === spider)
    ? spider.offsetLeft + ev.offsetX
    : ev.offsetX;

  const spiderTop = Math.min(
    Math.max(offsetY, spiderHeight / 2),
    wall.clientHeight - spiderHeight / 2
  ) - spiderHeight / 2;

  const spiderLeft = Math.min(
    Math.max(offsetX, spiderWidth / 2),
    wall.clientWidth - spiderWidth / 2
  ) - spiderWidth / 2;

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
