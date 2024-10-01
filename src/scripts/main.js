'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > wallRect.width - spiderWidth) {
    x = wallRect.width - spiderWidth * 1.5 + 5;
  }

  if (y > wallRect.height - spiderHeight) {
    y = wallRect.height - spiderHeight * 1.5 + 5;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
