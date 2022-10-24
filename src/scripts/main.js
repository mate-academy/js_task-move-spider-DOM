'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const leftCoord = wall.offsetLeft + wall.clientLeft;
  const topCoord = wall.offsetTop + wall.clientTop;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  spider.style.left = e.clientX - leftCoord - (spiderWidth / 2) + 'px';
  spider.style.top = e.clientY - topCoord - (spiderHeight / 2) + 'px';

  if (e.clientX - leftCoord < (spiderWidth / 2)) {
    spider.style.left = 0;
  }

  if (e.clientY - topCoord < (spiderHeight / 2)) {
    spider.style.top = 0;
  }

  if (e.clientX - leftCoord > wallWidth - (spiderWidth / 2)) {
    spider.style.left = wallWidth - spiderWidth + 'px';
  }

  if (e.clientY - topCoord > wallHeight - (spiderHeight / 2)) {
    spider.style.top = wallHeight - spiderHeight + 'px';
  }
});
