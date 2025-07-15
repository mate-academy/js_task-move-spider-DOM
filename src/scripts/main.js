'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallBorder = parseInt(getComputedStyle(wall).borderWidth);
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let left = clickX - wallRect.left - wallBorder - spiderWidth / 2;
  let newTop = clickY - wallRect.top - wallBorder - spiderHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (wallRect.height - wallBorder - newTop < spiderHeight) {
    newTop = wallRect.height - spiderHeight - wallBorder * 2;
  }

  if (wallRect.width - wallBorder - left < spiderWidth) {
    left = wallRect.width - spiderWidth - wallBorder * 2;
  }

  spider.style.left = `${left}px`;
  spider.style.top = `${newTop}px`;
});
