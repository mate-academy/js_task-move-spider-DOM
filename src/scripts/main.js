'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.offsetX > wall.clientWidth || e.offsetX < 0) {
    return;
  }

  if (e.offsetY > wall.clientHeight || e.offsetY < 0) {
    return;
  }

  const halfWidth = spider.clientWidth / 2;
  const halfHeight = spider.clientHeight / 2;
  const diffWidth = wall.clientWidth - e.offsetX;
  const diffHeight = wall.clientHeight - e.offsetY;

  if (e.offsetX < halfWidth) {
    const diffWidthLeftSide = halfWidth - e.offsetX;

    spider.style.left = `${e.offsetX - halfWidth + diffWidthLeftSide}px`;
  } else if (diffWidth >= halfWidth) {
    spider.style.left = `${e.offsetX - halfWidth}px`;
  } else if (diffWidth < halfWidth) {
    const side = halfWidth - diffWidth;

    spider.style.left = `${e.offsetX - (halfWidth + side)}px`;
  }

  if (e.offsetY < halfHeight) {
    const diffHeightTop = halfHeight - e.offsetY;

    spider.style.top = `${e.offsetY - halfHeight + diffHeightTop}px`;
  } else if (diffHeight >= halfHeight) {
    spider.style.top = `${e.offsetY - halfHeight}px`;
  } else if (diffHeight < halfHeight) {
    const topSide = halfHeight - diffHeight;

    spider.style.top = `${e.offsetY - (halfHeight + topSide)}px`;
  }
});
