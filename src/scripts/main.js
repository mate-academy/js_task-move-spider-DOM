'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const wallBorder = wall.clientTop * 2;

  let x = e.clientX - wallRect.left - spiderWidth / 2 - wallBorder / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2 - wallBorder / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > wallRect.width - spiderWidth) {
    x = wallRect.width - spiderWidth - wallBorder;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wallRect.height - spiderHeight) {
    y = wallRect.height - spiderHeight - wallBorder;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
