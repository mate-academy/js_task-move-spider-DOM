'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = parseInt(getComputedStyle(spider).height, 10);
const borderSize = parseInt(getComputedStyle(wall).border, 10);

document.addEventListener('click', (e) => {
  if (e.target === wall) {
    const wallRect = wall.getBoundingClientRect();
    const x = e.clientX - wallRect.left - spiderSize / 2 - borderSize;
    const y = e.clientY - wallRect.top - spiderSize / 2 - borderSize;

    const limitedX = Math.min(
      Math.max(x, 0),
      wall.clientWidth - spider.clientWidth,
    );

    const limitedY = Math.min(
      Math.max(y, 0),
      wall.clientHeight - spider.clientHeight,
    );

    spider.style.left = limitedX + 'px';
    spider.style.top = limitedY + 'px';
  }
});
