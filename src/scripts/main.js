'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = parseFloat(getComputedStyle(wall).borderWidth);

document.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();
  const clickedEl = document.elementFromPoint(e.clientX, e.clientY);
  let spiderTop
    = e.clientY - wallCoords.top - border - (spider.clientHeight / 2);
  let spiderLeft
    = e.clientX - wallCoords.left - border - (spider.clientWidth / 2);

  if (clickedEl.tagName !== wall.tagName) {
    return;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  };

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft + spider.clientWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  if (spiderTop + spider.clientHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
