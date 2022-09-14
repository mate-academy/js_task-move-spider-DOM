'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  let clickX = e.pageX;
  let clickY = e.pageY;
  const halfSpiderHeight = spider.offsetHeight / 2;
  const halfSpiderWidth = spider.offsetWidth / 2;
  const fromWallToTop = wall.offsetTop;
  const fromWallToLeft = wall.offsetLeft;

  const wallLeftCoord = fromWallToLeft + wall.clientLeft;
  const wallRightCoord = fromWallToLeft + wall.clientWidth;
  const wallBottomCoord = fromWallToTop + wall.clientHeight;
  const wallTopCoord = fromWallToTop + wall.clientTop;

  if (clickX - halfSpiderWidth < wallLeftCoord) {
    clickX = fromWallToLeft + halfSpiderWidth;
  }

  if (clickX + halfSpiderWidth > wallRightCoord) {
    clickX = fromWallToLeft + wall.clientWidth - halfSpiderWidth;
  }

  if (clickY - halfSpiderHeight < wallTopCoord) {
    clickY = fromWallToTop + halfSpiderHeight;
  }

  if (clickY + halfSpiderHeight > wallBottomCoord) {
    clickY = fromWallToTop + wall.clientHeight - halfSpiderHeight;
  }

  spider.style.left = clickX - wall.offsetLeft - halfSpiderWidth + 'px';
  spider.style.top = clickY - wall.offsetTop - halfSpiderHeight + 'px';
});
