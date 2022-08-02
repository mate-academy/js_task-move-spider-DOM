'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let moveHeight = e.offsetY - (spider.clientHeight / 2);
  let moveWidth = e.offsetX - (spider.clientWidth / 2);

  const maxHeightWall = wall.clientHeight - spider.clientHeight;
  const maxWidthWall = wall.clientWidth - spider.clientWidth;

  if (moveHeight < 0) {
    moveHeight = 0;
  }

  if (moveWidth < 0) {
    moveWidth = 0;
  }

  if (moveHeight > maxHeightWall) {
    spider.style.top = `${maxHeightWall}px`;
  } else {
    spider.style.top = `${moveHeight}px`;
  }

  if (moveWidth > maxWidthWall) {
    spider.style.left = `${maxWidthWall}px`;
  } else {
    spider.style.left = `${moveWidth}px`;
  }
});
