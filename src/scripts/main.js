'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.addEventListener('click', (e) => {
    e.preventDefault();

    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const spiderHalfWidth = spiderRect.width / 2;
    const spiderHalfHeight = spiderRect.height / 2;

    const relativeX = e.clientX - wallRect.left - wall.clientLeft;
    const relativeY = e.clientY - wallRect.top - wall.clientTop;

    let left = relativeX - spiderHalfWidth;
    let topS = relativeY - spiderHalfHeight;

    left = Math.max(0, Math.min(left, wall.clientWidth - spiderRect.width));
    topS = Math.max(0, Math.min(topS, wall.clientHeight - spiderRect.height));

    spider.style.left = `${left}px`;
    spider.style.top = `${topS}px`;
  });
});
