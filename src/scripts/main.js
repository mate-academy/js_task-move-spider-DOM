'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const computedStyle = getComputedStyle(wall);
  const borderWidth = parseInt(computedStyle.borderLeftWidth) * 2;

  let x = e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

  if (x < 0) {
    x = 0;
  } else if (x > wallRect.width - spiderRect.width - borderWidth) {
    x = wallRect.width - spiderRect.width - borderWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (y > wallRect.height - spiderRect.height - borderWidth) {
    y = wallRect.height - spiderRect.height - borderWidth;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
