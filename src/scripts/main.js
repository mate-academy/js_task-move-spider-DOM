'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

if (wall && spider) {
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  spider.style.position = 'absolute';

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const xInWall = e.clientX - (wallRect.left + wall.clientLeft);
    const yInWall = e.clientY - (wallRect.top + wall.clientTop);

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const desiredLeft = xInWall - spiderWidth / 2;
    const desiredTop = yInWall - spiderHeight / 2;

    const maxLeft = wall.clientWidth - spiderWidth;
    const maxTop = wall.clientHeight - spiderHeight;

    const clampedLeft = clamp(desiredLeft, 0, maxLeft);
    const clampedTop = clamp(desiredTop, 0, maxTop);

    spider.style.left = `${clampedLeft}px`;
    spider.style.top = `${clampedTop}px`;
  });
}
