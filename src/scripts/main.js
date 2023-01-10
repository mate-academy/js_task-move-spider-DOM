'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const wallHeight = wall.clientHeight;
    const wallWidth = wall.clientWidth;
    const spiderHeight = spider.clientHeight;
    const spiderWidth = spider.clientWidth;

    const spiderCord = {
      top: Math.round(e.offsetY - spiderHeight / 2),
      left: Math.round(e.offsetX - spiderWidth / 2),
    };

    if (spiderCord.top < 0) {
      spiderCord.top = 0;
    };

    if (spiderCord.top > wallHeight - spiderHeight) {
      spiderCord.top = wallHeight - spiderHeight;
    };

    if (spiderCord.left < 0) {
      spiderCord.left = 0;
    }

    if (spiderCord.left > wallWidth - spiderWidth) {
      spiderCord.left = wallWidth - spiderWidth;
    }

    spider.style.top = spiderCord.top + 'px';
    spider.style.left = spiderCord.left + 'px';
  }
});
