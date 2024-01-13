'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const coordXOnWall = e.clientX - wall.offsetLeft - wall.clientLeft;
  const coordYOnWall = e.clientY - wall.offsetTop - wall.clientTop;

  let leftPosSpider = coordXOnWall - spider.offsetWidth / 2;
  let topPosSpider = coordYOnWall - spider.offsetHeight / 2;

  if (coordYOnWall < spider.offsetHeight / 2) {
    topPosSpider = 0;
  }

  if (coordXOnWall < spider.offsetWidth / 2) {
    leftPosSpider = 0;
  }

  if (coordXOnWall > wall.clientWidth - spider.offsetWidth / 2) {
    leftPosSpider = wall.clientWidth - spider.offsetWidth;
  }

  if (coordYOnWall > wall.clientHeight - spider.offsetHeight / 2) {
    topPosSpider = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${leftPosSpider}px`;
  spider.style.top = `${topPosSpider}px`;
});
