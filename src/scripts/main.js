'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const maxSpiderX = wall.clientWidth - spiderWidth;
const maxSpiderY = wall.clientHeight - spiderHeight;

wall.addEventListener('click', (clickEvent) => {
  const spiderX = clickEvent.offsetX;
  const spiderY = clickEvent.offsetY;

  if (clickEvent.target !== wall) {
    return;
  }

  if (maxSpiderX < spiderX) {
    spider.style.left = maxSpiderX + 'px';
  } else {
    spider.style.left = (spiderX - spiderWidth / 2) + 'px';
  }

  if (maxSpiderY < spiderY) {
    spider.style.top = maxSpiderY + 'px';
  } else {
    spider.style.top = (spiderY - spiderHeight / 2) + 'px';
  }

  if (spiderWidth >= spiderX) {
    spider.style.left = 0;
  }

  if (spiderHeight >= spiderY) {
    spider.style.top = 0;
  }
});
