'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const spiderWidth = parseInt(spider.clientWidth);
  const spiderHeight = parseInt(spider.clientHeight);
  const wallWidth = parseInt(wall.clientWidth);
  const wallHeight = parseInt(wall.clientHeight);

  if (e.target !== wall) {
    return 0;
  }

  if (e.offsetX <= wallWidth - spiderWidth) {
    spider.style.left = e.offsetX - spiderWidth / 2 + 'px';
  } else {
    spider.style.left = wallWidth - spiderWidth + 'px';
  }

  if (e.offsetX <= spiderWidth / 2) {
    spider.style.left = 0 + 'px';
  }

  if (e.offsetY <= wallHeight - spiderHeight / 2) {
    spider.style.top = e.offsetY - spiderHeight / 2 + 'px';
  } else {
    spider.style.top = wallHeight - spiderHeight + 'px';
  }

  if (e.offsetY <= spiderHeight / 2) {
    spider.style.top = 0 + 'px';
  }
});
