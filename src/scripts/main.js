'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const styleSpider = getComputedStyle(spider);
const spiderWidth = parseFloat(styleSpider.width);
const styleWall = getComputedStyle(wall);
const wallWidth = parseFloat(styleWall.width);
const border = parseFloat(styleWall.borderWidth);
const maxTrail = wallWidth - spiderWidth;

wall.addEventListener('click', e => {
  const coords = wall.getBoundingClientRect();
  const centerY = e.clientY - coords.top - border - spiderWidth / 2;
  const centerX = e.clientX - coords.left - border - spiderWidth / 2;

  centerY < 0
    ? spider.style.top = `0px`
    : centerY <= maxTrail
      ? spider.style.top = `${centerY}px`
      : spider.style.top = `${maxTrail}px`;

  centerX < 0
    ? spider.style.left = `0px`
    : centerX <= maxTrail
      ? spider.style.left = `${centerX}px`
      : spider.style.left = `${maxTrail}px`;
});
