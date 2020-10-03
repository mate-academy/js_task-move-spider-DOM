'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const posInWall = e.target.getBoundingClientRect();

  const posX = e.clientX;
  const posY = e.clientY;

  const wallCL = wall.clientLeft;
  const wallCT = wall.clientTop;
  const spiderCW = spider.clientWidth;
  const spiderCH = spider.clientHeight;

  let spiderPosLeft = posX - posInWall.left - wallCL - spiderCW / 2;
  let spiderPosTop = posY - posInWall.top - wallCT - spiderCH / 2;

  if (spiderPosLeft < 0) {
    spiderPosLeft = 0;
  }

  if (spiderPosTop < 0) {
    spiderPosTop = 0;
  }

  if (spiderPosLeft + spider.clientWidth > wall.clientWidth) {
    spiderPosLeft = wall.clientWidth - spider.clientWidth;
  }

  if (spiderPosTop + spider.clientHeight > wall.clientHeight) {
    spiderPosTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderPosLeft}px`;
  spider.style.top = `${spiderPosTop}px`;
});
