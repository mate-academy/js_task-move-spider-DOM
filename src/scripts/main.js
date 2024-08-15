'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  x = Math.max(
    0,
    Math.min(
      e.offsetX - spider.offsetWidth / 2,
      wall.clientWidth - spider.offsetWidth,
    ),
  );

  y = Math.max(
    0,
    Math.min(
      e.offsetY - spider.offsetHeight / 2,
      wall.clientHeight - spider.offsetHeight,
    ),
  );

  spider.style.position = 'absolute';
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
