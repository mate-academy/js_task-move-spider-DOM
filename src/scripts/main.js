'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const border = parseInt(window.getComputedStyle(wall).border);

const maxSpiderX = wall.clientWidth - spider.clientWidth;
const maxSpiderY = wall.clientHeight - spider.clientHeight;

wall.addEventListener('click', e => {
  let spiderX = e.clientX
    - wall.offsetLeft - border - spider.clientWidth / 2;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > maxSpiderX) {
    spiderX = maxSpiderX;
  }

  spider.style.left = spiderX + 'px';

  let spiderY = e.clientY
    - wall.offsetTop - border - spider.clientHeight / 2;

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > maxSpiderY) {
    spiderY = maxSpiderY;
  }

  spider.style.top = spiderY + 'px';
});
