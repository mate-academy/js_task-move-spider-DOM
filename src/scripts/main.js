'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const wall = e.currentTarget;
  const spider = wall.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const newLeft = clickX - spiderHalfWidth;
  const newTop = clickY - spiderHalfHeight;

  const maxX = wall.offsetWidth - spider.offsetWidth;
  const maxY = wall.offsetHeight - spider.offsetHeight;

  if (newLeft < maxX / 2) {
    spider.style.left = `${Math.max(0, newLeft)}px`;
    spider.style.right = 'auto';
  } else {
    spider.style.left = 'auto';
    spider.style.right = `${Math.max(0, maxX - newLeft)}px`;
  }

  if (newTop < maxY / 2) {
    spider.style.top = `${Math.max(0, newTop)}px`;
    spider.style.bottom = 'auto';
  } else {
    spider.style.top = 'auto';
    spider.style.bottom = `${Math.max(0, maxY - newTop)}px`;
  }
});
