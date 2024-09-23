'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let newLeft = clickX - spiderRect.width / 2;
  let newTop = clickY - spiderRect.height / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft + spiderRect.width > wallRect.width) {
    newLeft = wallRect.width - spiderRect.width;
  }

  if (newTop + spiderRect.height > wallRect.height) {
    newTop = wallRect.height - spiderRect.height;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
