'use strict';

const spider = document.getElementsByClassName('spider')[0];
const wall = document.getElementsByClassName('wall')[0];

document.addEventListener('click', (e) => {
  if (e.target.closest('.spider')) {
    return;
  }

  if (e.target.closest('.wall')) {
    const spiderCentered = spider.clientWidth / 2;

    let targetX = e.offsetX - spiderCentered;
    let targetY = e.offsetY - spiderCentered;

    targetX = Math.max(
      0,
      Math.min(targetX, wall.clientWidth - spider.clientWidth),
    );

    targetY = Math.max(
      0,
      Math.min(targetY, wall.clientHeight - spider.clientHeight),
    );

    spider.style.left = `${targetX}px`;
    spider.style.top = `${targetY}px`;
  }
});
