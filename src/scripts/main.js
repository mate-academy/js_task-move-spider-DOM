'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderRect = spider.getBoundingClientRect();

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

document.addEventListener('click', (e) => {
  e.preventDefault();

  if (!wall.contains(e.target)) {
    return;
  }

  const xPos = e.clientX - spiderRect.left - spiderRect.width / 2;
  const yPos = e.clientY - spiderRect.top - spiderRect.height / 2;

  let newLeft = xPos;
  let newTop = yPos;

  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft + spiderRect.width > wallWidth) {
    newLeft = wallWidth - spiderRect.width;
  }

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop + spiderRect.height > wallHeight) {
    newTop = wallHeight - spiderRect.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
