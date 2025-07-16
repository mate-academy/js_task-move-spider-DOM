'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', function (event) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const spiderHalfWidth = spiderRect.width / 2;
    const spiderHalfHeight = spiderRect.height / 2;

    const clickX = event.clientX - wallRect.left;
    const clickY = event.clientY - wallRect.top;

    const maxLeft = wall.clientWidth - spiderRect.width;
    const maxTop = wall.clientHeight - spiderRect.height;

    const newLeft = Math.min(Math.max(clickX - spiderHalfWidth, 0), maxLeft);
    const newTop = Math.min(Math.max(clickY - spiderHalfHeight, 0), maxTop);

    spider.style.position = 'absolute';
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});

