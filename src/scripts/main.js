'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spiderSize = spider.offsetWidth;
  const halfSpider = spider.offsetWidth / 2;
  const widthWall = wall.clientWidth;
  const heightWall = wall.clientHeight;
  const widthCenterClick = widthWall / 2 + spiderSize + halfSpider;
  const heightCenterClick = wall.clientHeight / 2 + spiderSize;
  let resultLeft = e.clientX - widthCenterClick;
  let resultTop = e.clientY - heightCenterClick + spiderSize;

  resultLeft = resultLeft < widthWall - spiderSize
    ? resultLeft
    : widthWall + spiderSize;

  resultTop = resultTop < heightWall - spiderSize
    ? resultTop
    : heightWall - spiderSize;

  if (resultLeft < 0) {
    resultLeft = 0;
  }

  if (resultTop < 0) {
    resultTop = 0;
  }

  if (resultLeft > widthWall) {
    resultLeft = widthWall - spiderSize;
  }

  if (resultLeft < widthWall) {
    spider.style.left = resultLeft + 'px';
    spider.style.top = resultTop + 'px';
  }
});
