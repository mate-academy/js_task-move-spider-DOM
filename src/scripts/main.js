'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const leftBorderWall = wall.getBoundingClientRect().left + wall.clientLeft;
  const topBorderWall = wall.getBoundingClientRect().top + wall.clientTop;

  const currClick = e.target.closest('.wall');

  if (!currClick) {
    return;
  }

  const currClickPosX = e.clientX;
  const currClickPosY = e.clientY;

  const SpiderWidth = spider.offsetWidth;
  const SpiderHeight = spider.offsetHeight;

  // start & end the borders of Wall
  const startW = leftBorderWall;
  const endW = leftBorderWall + wall.clientWidth;

  const startH = topBorderWall;
  const endH = topBorderWall + wall.clientHeight;

  if (currClickPosX < startW + SpiderWidth / 2) {
    spider.style.left = 0 + 'px';
  } else if (currClickPosX > endW - SpiderWidth / 2) {
    spider.style.left = `${wall.clientWidth - SpiderWidth}px`;
  } else {
    spider.style.left = `${currClickPosX - leftBorderWall - SpiderWidth / 2}px`;
  }

  if (currClickPosY < startH + SpiderHeight / 2) {
    spider.style.top = 0 + 'px';
  } else if (currClickPosY > endH - SpiderHeight / 2) {
    spider.style.top = `${wall.clientHeight - SpiderHeight}px`;
  } else {
    spider.style.top = `${currClickPosY - topBorderWall - SpiderHeight / 2}px`;
  }
});
