'use strict';

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.wall')) {
    const wall = document.querySelector('.wall');
    const spider = document.querySelector('.spider');

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    let spiderNewPositionX = e.offsetX - spider.clientWidth / 2;
    let spiderNewPositionY = e.offsetY - spider.clientHeight / 2;

    if (spiderNewPositionX > maxX) {
      spiderNewPositionX = maxX;
    }

    if (spiderNewPositionY > maxY) {
      spiderNewPositionY = maxY;
    }

    if (spiderNewPositionX < 0) {
      spiderNewPositionX = 0;
    }

    if (spiderNewPositionY < 0) {
      spiderNewPositionY = 0;
    }

    spider.style.left = `${spiderNewPositionX}px`;
    spider.style.top = `${spiderNewPositionY}px`;
  } else {
  }
});
