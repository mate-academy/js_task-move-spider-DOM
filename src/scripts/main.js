'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const clickX = e.clientX;
    const clickY = e.clientY;

    let leftPos = clickX - wallRect.left - spiderRect.width / 2;
    let topPos = clickY - wallRect.top - spiderRect.height / 2;

    if (leftPos < 0) {
      leftPos = 0;
    }

    if (topPos < 0) {
      topPos = 0;
    }

    if (leftPos + spiderRect.width > wallRect.width) {
      leftPos = wallRect.width - spiderRect.width;
    }

    if (topPos + spiderRect.height > wallRect.height) {
      topPos = wallRect.height - spiderRect.height;
    }

    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  });
}
