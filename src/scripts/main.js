'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();

  let spiderTop = e.clientY - wallCoords.top - wall.clientTop
  - spider.offsetHeight / 2;
  let spiderLeft = e.clientX - wallCoords.left - wall.clientLeft
  - spider.offsetWidth / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop + spider.offsetHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  if (spiderLeft + spider.offsetWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
