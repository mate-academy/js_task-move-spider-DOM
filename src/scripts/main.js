'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    const parentCoords = {
      height: wall.clientHeight - spider.offsetHeight,
      width: wall.clientWidth - spider.offsetWidth,
    };

    const childCoords = {
      top: e.offsetY - spider.offsetHeight / 2,
      left: e.offsetX - spider.offsetWidth / 2,
    };

    if (childCoords.top < 0) {
      childCoords.top = 0;
    }

    if (childCoords.left < 0) {
      childCoords.left = 0;
    }

    if (childCoords.left > parentCoords.height) {
      childCoords.left = parentCoords.height;
    }

    if (childCoords.top > parentCoords.width) {
      childCoords.top = parentCoords.width;
    }

    spider.style.top = childCoords.top + 'px';
    spider.style.left = childCoords.left + 'px';
  }
});
