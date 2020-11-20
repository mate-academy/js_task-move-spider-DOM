'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  if (e.target !== spider) {
    const spiderHeight = spider.clientHeight;
    const spiderWidth = spider.clientWidth;

    const wallHeight = wall.clientHeight;
    const wallWidth = wall.clientWidth;

    let y = e.offsetY;
    let x = e.offsetX;

    y = y < spiderHeight ? y = spiderHeight / 2 : y;
    x = x < spiderWidth ? x = spiderWidth / 2 : x;

    y = y > wallHeight - spiderHeight / 2 ? wallHeight - spiderHeight / 2 : y;
    x = x > wallWidth - spiderWidth / 2 ? wallWidth - spiderWidth / 2 : x;

    spider.style.top = y - (spiderHeight / 2) + 'px';
    spider.style.left = x - (spiderWidth / 2) + 'px';
  }
});
