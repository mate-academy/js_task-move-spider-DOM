'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallHeightLimit = wall.clientHeight - spider.offsetHeight;
  const wallWidthLimit = wall.clientWidth - spider.offsetWidth;

  wall.addEventListener('click', k => {
    let positionLeft = k.offsetX - (spider.offsetWidth / 2);
    let positionTop = k.offsetY - (spider.offsetHeight / 2);

    if (positionLeft < 0) {
      positionLeft = 0;
    }

    if (positionLeft > wallWidthLimit) {
      positionLeft = wallWidthLimit;
    }

    if (positionTop < 0) {
      positionTop = 0;
    }

    if (positionTop > wallHeightLimit) {
      positionTop = wallHeightLimit;
    }

    spider.style.top = `${positionTop}px`;
    spider.style.left = `${positionLeft}px`;
  });
});
