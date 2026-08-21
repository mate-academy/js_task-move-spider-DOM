'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const leftSpider = Math.max(
    0,
    Math.min(
      e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2,
      wall.clientWidth - spiderRect.width,
    ),
  );

  const topSpider = Math.max(
    0,
    Math.min(
      e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2,
      wall.clientHeight - spiderRect.height,
    ),
  );

  spider.style.left = `${leftSpider}px`;
  spider.style.top = `${topSpider}px`;
});
