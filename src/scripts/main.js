'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', function (e) {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  if (e.target === wall) {
    const clickX = e.clientX;
    const clickY = e.clientY;

    let newLeft =
      clickX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
    let newTop = clickY - wallRect.top - wall.clientTop - spiderRect.height / 2;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newTop < 0) {
      newTop = 0;
    }

    if (newLeft + spiderRect.width > wall.clientWidth) {
      newLeft = wall.clientWidth - spiderRect.width;
    }

    if (newTop + spiderRect.height > wall.clientHeight) {
      newTop = wall.clientHeight - spiderRect.height;
    }

    spider.style.left = newLeft + 'px';
    spider.style.top = newTop + 'px';
  }
});
