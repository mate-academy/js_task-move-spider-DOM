'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderSize = spider.clientWidth;

  const wallRect = wall.getBoundingClientRect();

  const style = window.getComputedStyle(wall);
  const borderLeft = parseFloat(style.borderLeftWidth);
  const borderTop = parseFloat(style.borderTopWidth);

  let newX = e.clientX - wallRect.left - borderLeft - spiderSize / 2;
  let newY = e.clientY - wallRect.top - borderTop - spiderSize / 2;

  const contentWidth = wall.clientWidth;
  const contentHeight = wall.clientHeight;

  if (newX < 0 || newX > contentWidth - spiderSize) {
    newX = Math.max(0, Math.min(newX, contentWidth - spiderSize));
  }

  if (newY < 0 || newY > contentHeight - spiderSize) {
    newY = Math.max(0, Math.min(newY, contentHeight - spiderSize));
  }

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
