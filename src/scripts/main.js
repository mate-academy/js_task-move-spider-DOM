'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here
  if (wall.contains(e.target) || e.target === wall) {
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const clickX = e.clientX;
    const clickY = e.clientY;

    const wallRect = wall.getBoundingClientRect();

    const clickXRelativeToWall = clickX - wallRect.left;
    const clickYRelativeToWall = clickY - wallRect.top;

    let newSpiderLeft = clickXRelativeToWall - spiderWidth / 2;
    let newSpiderTop = clickYRelativeToWall - spiderHeight / 2;

    if (newSpiderLeft < 0) {
      newSpiderLeft = 0;
    }

    if (newSpiderTop < 0) {
      newSpiderTop = 0;
    }

    if (newSpiderLeft + spiderWidth > wallWidth) {
      newSpiderLeft = wallWidth - spiderWidth;
    }

    if (newSpiderTop + spiderHeight > wallHeight) {
      newSpiderTop = wallHeight - spiderHeight;
    }

    spider.style.left = `${newSpiderLeft}px`;
    spider.style.top = `${newSpiderTop}px`;
  }
});
