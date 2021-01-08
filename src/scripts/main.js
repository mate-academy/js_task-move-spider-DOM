'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    let topCoord = e.offsetY - spider.height / 2;
    let leftCoord = e.offsetX - spider.width / 2;

    if (topCoord < 0) {
      topCoord = 0;
    }

    if (topCoord > (wall.clientHeight - spider.height)) {
      topCoord = wall.clientHeight - spider.height;
    }

    if (leftCoord < 0) {
      leftCoord = 0;
    }

    if (leftCoord > (wall.clientWidth - spider.width)) {
      leftCoord = wall.clientWidth - spider.width;
    }

    spider.style.top = `${topCoord}px`;
    spider.style.left = `${leftCoord}px`;
  }
});
