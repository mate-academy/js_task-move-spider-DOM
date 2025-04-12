'use strict';

const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  wall.style.position = 'relative';

  if (e.target !== wall) {
    return;
  }

  const wallBorder = parseInt(window.getComputedStyle(wall).borderWidth, 10);
  const relativeX =
    e.clientX - wallRect.left - wallBorder - spiderRect.width / 2;
  const relativeY =
    e.clientY - wallRect.top - wallBorder - spiderRect.height / 2;

  const X = clamp(relativeX, 0, wall.clientWidth - spiderRect.width);
  const Y = clamp(relativeY, 0, wall.clientHeight - spiderRect.height);

  spider.style.position = 'absolute';
  spider.style.left = `${X}px`;
  spider.style.top = `${Y}px`;
});
