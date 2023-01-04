'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallData = wall.getBoundingClientRect();

  const wallPositionX = wallData.left + wall.clientLeft;
  const wallPositionY = wallData.top + wall.clientTop;

  let spiderX = e.clientX - wallPositionX - spider.offsetWidth / 2;
  let spiderY = e.clientY - wallPositionY - spider.offsetHeight / 2;

  const horisontalLimit = wall.clientWidth - spider.offsetWidth;
  const verticalLimit = wall.clientHeight - spider.offsetHeight;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > horisontalLimit) {
    spiderX = horisontalLimit;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > verticalLimit) {
    spiderY = verticalLimit;
  }

  if (e.target.className !== 'wall') {
    return false;
  }

  spider.style.cssText
    = `margin-top: ${spiderY}px;
    margin-left: ${spiderX}px`;
});
