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

  let spiderY = `${centerY}px`;
  let spiderX = `${centerX}px`;

  if (centerY < 0) {
    spiderY = `0px`;
  }

  if (centerY > maxTrail) {
    spiderY = `${maxTrail}px`;
  }

  if (centerX < 0) {
    spiderX = `0px`;
  }

  if (centerX > maxTrail) {
    spiderX = `${maxTrail}px`;
  }
  spider.style.top = spiderY;
  spider.style.left = spiderX;
});
