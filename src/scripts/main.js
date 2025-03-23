'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', () => {
    const wallRect = wall.getBoundingClientRect();
    const wallStyle = getComputedStyle(wall);
    const borderLeftWidth = parseInt(wallStyle.borderLeftWidth) || 0;
    const borderTopWidth = parseInt(wallStyle.borderTopWidth) || 0;
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;
    let newX =
      event.clientX - wallRect.left - spiderWidth / 2 - borderLeftWidth;
    let newY = event.clientY - wallRect.top - spiderHeight / 2 - borderTopWidth;
    const innerWallWidth = wallRect.width - borderLeftWidth * 2;
    const innerWallHeight = wallRect.height - borderTopWidth * 2;

    if (newX < 0) {
      newX = 0;
    }

    if (newX > innerWallWidth - spiderWidth) {
      newX = innerWallWidth - spiderWidth;
    }

    if (newY < 0) {
      newY = 0;
    }

    if (newY > innerWallHeight - spiderHeight) {
      newY = innerWallHeight - spiderHeight;
    }

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  });
});
