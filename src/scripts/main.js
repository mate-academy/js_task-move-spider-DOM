'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoord = wall.getBoundingClientRect();
  const spiderCoord = spider.getBoundingClientRect();
  const spiderHalfHeight = spider.clientHeight / 2;
  const borderSize = parseFloat(getComputedStyle(wall).borderWidth);
  const leftCoord = e.clientX - wallCoord.left - borderSize;
  const topCoord = e.clientY - wallCoord.top - borderSize;

  if (e.clientX > wallCoord.left && e.clientX < wallCoord.right) {
    if (e.target === wall && leftCoord - spider.clientWidth / 2 < 0) {
      spider.style.left = 0;
    }

    if (e.target === wall
      && leftCoord + spider.clientWidth / 2 > wall.clientWidth) {
      spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
    }

    if (e.target === wall && leftCoord - spider.clientWidth
      / 2 > 0 && leftCoord - spiderCoord.width
      / 2 < wall.clientWidth - spider.clientWidth) {
      spider.style.left = leftCoord - spider.clientWidth / 2 + 'px';
    }
  }

  if (e.clientY > wallCoord.top && e.clientY < wallCoord.bottom) {
    if (e.target === wall && topCoord - spiderHalfHeight < 0) {
      spider.style.top = 0;
    }

    if (e.target === wall && topCoord + spiderHalfHeight > wall.clientHeight) {
      spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
    }

    if (e.target === wall && topCoord - spiderHalfHeight > 0
      && topCoord + spiderHalfHeight < wall.clientHeight) {
      spider.style.top = topCoord - spiderHalfHeight + 'px';
    }
  }
});
