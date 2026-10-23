'use strict';

document.addEventListener('click', (e) => {
  // write code here
  if (e.target.closest('.wall')) {
    const wall = document.querySelector('.wall');
    const spider = document.querySelector('.spider');

    const wallPosition = wall.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;

    let distanceX = clickX - wallPosition.left - wall.clientLeft;
    let distanceY = clickY - wallPosition.top - wall.clientTop;

    distanceX -= spider.clientWidth / 2;
    distanceY -= spider.clientHeight / 2;

    const allowedX = Math.min(
      Math.max(distanceX, 0),
      wall.clientWidth - spider.clientWidth,
    );
    const allowedY = Math.min(
      Math.max(distanceY, 0),
      wall.clientHeight - spider.clientHeight,
    );

    distanceX = allowedX;
    distanceY = allowedY;

    spider.style.left = `${distanceX}px`;
    spider.style.top = `${distanceY}px`;
  }
});
