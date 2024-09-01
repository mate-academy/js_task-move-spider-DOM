'use strict';

const wall = document.querySelector('div');

wall.addEventListener('click', (e) => {
  const spider = wall.querySelector('img');

  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const wallBorder = wall.clientTop;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let spiderLeft = clickX - wallRect.left - wallBorder - spiderHeight / 2;
  let spiderTop = clickY - wallRect.top - wallBorder - spiderWidth / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft + spiderWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spiderWidth;
  }

  if (spiderTop + spiderHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spiderHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
