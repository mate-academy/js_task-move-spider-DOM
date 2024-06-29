'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  e.preventDefault();

  const wallRect = wall.getBoundingClientRect();

  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

  let newTop = e.clientY - wallRect.top - spiderHeight / 2 - borderWidth;
  let newLeft = e.clientX - wallRect.left - spiderWidth / 2 - borderWidth;

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop + spiderHeight > wallRect.height - 2 * borderWidth) {
    newTop = wallRect.height - spiderHeight - 2 * borderWidth;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft + spiderWidth > wallRect.width - 2 * borderWidth) {
    newLeft = wallRect.width - spiderWidth - 2 * borderWidth;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
