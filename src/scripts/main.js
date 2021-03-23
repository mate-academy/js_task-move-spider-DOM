'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();

  let spiderTop
    = e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2;
  let spiderLeft
    = e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft + spider.clientWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  if (spiderTop + spider.clientHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
