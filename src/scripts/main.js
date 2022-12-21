'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const wallCoords = {
      width: wall.clientWidth - spider.offsetWidth,
      height: wall.clientHeight - spider.offsetHeight,
    };

    const spiderCoords = {
      top: e.offsetY - spider.offsetHeight / 2,
      left: e.offsetX - spider.offsetWidth / 2,
    };

    if (spiderCoords.left < 0) {
      spiderCoords.left = 0;
    }

    if (spiderCoords.top < 0) {
      spiderCoords.top = 0;
    }

    if (spiderCoords.left > wallCoords.width) {
      spiderCoords.left = wallCoords.width;
    }

    if (spiderCoords.top > wallCoords.height) {
      spiderCoords.top = wallCoords.height;
    }

    spider.style.top = spiderCoords.top + 'px';
    spider.style.left = spiderCoords.left + 'px';
  }
});
