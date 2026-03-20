'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    const spider = document.querySelector('.spider');

    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const borderLeft = wall.clientLeft;
    const borderTop = wall.clientTop;

    let leftValue =
      e.clientX - wallRect.left - borderLeft - spiderRect.width / 2;
    let topValue = e.clientY - wallRect.top - borderTop - spiderRect.height / 2;

    const maxLeft = wall.clientWidth - spiderRect.width;
    const maxTop = wall.clientHeight - spiderRect.height;

    leftValue = Math.max(0, Math.min(leftValue, maxLeft));
    topValue = Math.max(0, Math.min(topValue, maxTop));

    spider.style.left = `${leftValue}px`;
    spider.style.top = `${topValue}px`;
  }
});
