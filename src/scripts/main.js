'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();
  const wallBorder = wall.clientTop;

  const halfSpriderY = spiderSize.width / 2;
  const halfSpriderX = spiderSize.height / 2;

  const topShift = e.clientY - wallSize.top - halfSpriderY - wallBorder;
  const leftShift = e.clientX - wallSize.left - halfSpriderX - wallBorder;

  const shiftY = Math.max(
    0,
    Math.min(topShift, wall.clientHeight - spiderSize.height),
  );
  const shiftX = Math.max(
    0,
    Math.min(leftShift, wall.clientWidth - spiderSize.width),
  );

  spider.style.left = shiftX + 'px';
  spider.style.top = shiftY + 'px';
});
