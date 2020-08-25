'use strict';

const spider = document.querySelector('.spider');

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  let topCoord = (e.offsetY - spiderHeight / 2);
  let leftCoord = (e.offsetX - spiderWidth / 2);

  if (topCoord < 0) {
    topCoord = 0;
  }

  if (topCoord + spiderHeight > wallHeight) {
    topCoord = wallHeight - spiderHeight;
  }

  if (leftCoord + spiderWidth > wallWidth) {
    leftCoord = wallWidth - spiderWidth;
  }

  if (leftCoord < 0) {
    leftCoord = 0;
  }

  if (document.contains(wall)) {
    spider.style.top = `${topCoord}px`;
    spider.style.left = `${leftCoord}px`;
  }
});
