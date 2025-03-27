'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    const clickX = e.clientX;
    const clickY = e.clientY;

    const spiderHalfWidth = spider.offsetWidth / 2;
    const spiderHalfHeight = spider.offsetHeight / 2;

    let left = clickX - wallRect.left - spiderHalfWidth;
    let topPos = clickY - wallRect.top - spiderHalfHeight;

    left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));

    topPos = Math.max(
      0,
      Math.min(topPos, wall.clientHeight - spider.offsetHeight),
    );

    spider.style.position = 'absolute';
    spider.style.left = `${left}px`;
    spider.style.top = `${topPos}px`;
  });
});
