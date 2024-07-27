'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let newLeft = clickX - spiderWidth / 2 - spiderWidth * 0.5;
  let newTop = clickY - spiderHeight / 2 - spiderHeight * 0.5;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft + spiderWidth > wallRect.width) {
    newLeft = wallRect.width - spiderWidth;
  }

  if (newTop + spiderHeight > wallRect.height) {
    newTop = wallRect.height - spiderHeight;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
