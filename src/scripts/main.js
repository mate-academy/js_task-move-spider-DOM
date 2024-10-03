'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const wallStyles = getComputedStyle(wall);
  const borderLeftWidth = parseInt(wallStyles.borderLeftWidth);
  const borderTopWidth = parseInt(wallStyles.borderTopWidth);

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const clickX = e.clientX - wallRect.left - borderLeftWidth;
  const clickY = e.clientY - wallRect.top - borderTopWidth;

  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX + spiderWidth > wallRect.width - borderLeftWidth * 2) {
    spiderX = wallRect.width - spiderWidth - borderLeftWidth * 2;
  }

  if (spiderY + spiderHeight > wallRect.height - borderTopWidth * 2) {
    spiderY = wallRect.height - spiderHeight - borderTopWidth * 2;
  }

  spider.style.top = `${spiderY}px`;

  spider.style.left = `${spiderX}px`;
});
