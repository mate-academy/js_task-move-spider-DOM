'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallInfo = wall.getBoundingClientRect();
const wallBorder = parseFloat(getComputedStyle(wall).borderWidth);
const spiderHalfWidth = spider.offsetWidth / 2;
const spiderHalfHeight = spider.offsetHeight / 2;

wall.addEventListener('click', e => {
  let spiderLeftPosition = e.clientX
  - wallInfo.left - spiderHalfWidth - wallBorder + 'px';

  let spiderTopPosition = e.clientY
  - wallInfo.top - spiderHalfHeight - wallBorder + 'px';

  const minX = wallInfo.left + wallBorder + spiderHalfWidth;
  const maxX = wallInfo.right - wallBorder - spiderHalfWidth;
  const minY = wallInfo.top + wallBorder + spiderHalfHeight;
  const maxY = wallInfo.bottom - wallBorder - spiderHalfHeight;

  if (e.clientX < minX) {
    spiderLeftPosition = 0;
  } else if (e.clientX > maxX) {
    spiderLeftPosition = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.clientY < minY) {
    spiderTopPosition = 0;
  } else if (e.clientY > maxY) {
    spiderTopPosition = wall.clientHeight - spider.offsetHeight + 'px';
  }

  spider.style.top = spiderTopPosition;
  spider.style.left = spiderLeftPosition;
});
