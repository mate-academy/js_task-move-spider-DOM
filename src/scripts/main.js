'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const { clientWidth: wallWidth, clientHeight: wallHeight } = wall;
  const { offsetWidth: spiderWidth, offsetHeight: spiderHeight } = spider;

  const { target, offsetX, offsetY } = e;

  if (wall === target) {
    const pos = {
      left: offsetX - (spiderWidth / 2),
      top: offsetY - (spiderHeight / 2),
    };

    if (pos.left + spiderWidth > wallWidth) {
      pos.left = wallWidth - spiderWidth;
    }

    if (pos.left < 0) {
      pos.left = 0;
    }

    if (pos.top + spiderHeight > wallHeight) {
      pos.top = wallHeight - spiderHeight;
    }

    if (pos.top < 0) {
      pos.top = 0;
    }

    spider.style.left = pos.left + 'px';
    spider.style.top = pos.top + 'px';
  }
});
