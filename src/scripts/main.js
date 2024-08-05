'use strict';

const wall = document.querySelector('.wall');
const WALL_HEIGHT = wall.clientHeight;
const WALL_WIDTH = wall.clientWidth;
const WALL_TOP = wall.clientTop;
const WALL_LEFT = wall.clientLeft;
const wallRect = wall.getBoundingClientRect();

const spider = document.querySelector('.spider');
const spiderRect = spider.getBoundingClientRect();

document.addEventListener('click', function (e) {
  if (e.target === wall) {
    const clickX = e.clientX;
    const clickY = e.clientY;

    let newLeft = clickX - wallRect.left - WALL_LEFT - spiderRect.width / 2;
    let newTop = clickY - wallRect.top - WALL_TOP - spiderRect.height / 2;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newTop < 0) {
      newTop = 0;
    }

    if (newLeft + spiderRect.width > WALL_WIDTH) {
      newLeft = WALL_WIDTH - spiderRect.width;
    }

    if (newTop + spiderRect.height > WALL_HEIGHT) {
      newTop = WALL_HEIGHT - spiderRect.height;
    }

    spider.style.left = newLeft + 'px';
    spider.style.top = newTop + 'px';
  }
});
